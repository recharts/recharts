import{r as f,e}from"./iframe-zYnk8EOr.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis--5gqcMjD.js";import{R as A}from"./arrayEqualityCheck-R2aAAI7x.js";import{C}from"./ComposedChart-D5xvMhhv.js";import{X as K}from"./XAxis-BSJK083u.js";import{L as v}from"./Legend-WNA_odee.js";import{B as a}from"./Bar-DWJ0slbO.js";import{R as x}from"./RechartsHookInspector-BM6dBg77.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./CartesianAxis-BwSMeEYw.js";import"./Layer-B9ovT-3z.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./Label-GsPpBxAc.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DbRKS04n.js";import"./zIndexSlice-BvNEMV0a.js";import"./types-BQ3BmiiK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./RechartsWrapper-CuXPMym5.js";import"./CartesianChart-Bb7O5ezJ.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./Symbols-CvhTj7bZ.js";import"./Curve-BERjiOgY.js";import"./useElementOffset-DCTaxlc8.js";import"./iteratee-Ci7OymFI.js";import"./tooltipContext-C_ibJ9CU.js";import"./ReactUtils-TEkJxkkD.js";import"./ActiveShapeUtils-B-4Mqq4H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWuLgpNw.js";import"./useAnimationId-C9zF9Z14.js";import"./Trapezoid-Ciecc0SZ.js";import"./Sector-CRX25Q97.js";import"./RegisterGraphicalItemId-Xtx5eZl0.js";import"./ErrorBarContext-Bboddv8p.js";import"./GraphicalItemClipPath-BwpenKow.js";import"./SetGraphicalItem-CghMnI1R.js";import"./getZIndexFromUnknown-BLV71gej.js";import"./graphicalItemSelectors-BLhvCA_u.js";import"./index-C4mhfMdJ.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
