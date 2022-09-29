import { FormLayout, PageContentLayout } from '../../ui'
import { BookForm } from '../views/BookForm'

export const CreateBookPage = () => {
  return (
    <PageContentLayout>
      <FormLayout title='Save Your Book'>
        <BookForm />
      </FormLayout>
    </PageContentLayout>
  )
}
