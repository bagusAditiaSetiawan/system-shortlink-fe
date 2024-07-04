import PrimaryModal from "../../../components/admin/modals/primary.modal.tsx";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {DialogTitle} from "@headlessui/react";
import {GetAccessToken} from "../../../services/token/token_service.tsx";
import {shortedLinkService} from "../../../services/shorted_link/shorted_link_service.tsx";


export default function ShortlinkAddPage() {
    const token = GetAccessToken()
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        if(!open) {
            navigate("/admin/shortlink")
        }
    }, [open, navigate]);
    const [url, setUrl] = useState<string>("");
    const submitHandler = async () => {
        shortedLinkService.create({
            url,
        }, token).then(() => {
            setOpen(false)
        })
    }

    return (
        <>
          <PrimaryModal open={open} setOpen={setOpen} submitHandler={submitHandler}>
              <>
                  <DialogTitle as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-4">
                      Form
                  </DialogTitle>
                  <div className="sm:col-span-4">
                      <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                          Url
                      </label>
                      <div className="mt-2">
                          <input
                              type="text"
                              name="url"
                              id="url"
                              autoComplete="url"
                              className="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="janesmith"
                              value={url}
                              onChange={e => setUrl(e.target.value)}
                          />
                      </div>
                  </div>
              </>
          </PrimaryModal>
        </>
    )
}