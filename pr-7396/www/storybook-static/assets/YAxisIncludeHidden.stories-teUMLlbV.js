import{r as f,R as e}from"./iframe-BOLHcnEq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-YubxuWa5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C8kTqOmj.js";import{C as k}from"./ComposedChart-D7OPmIGY.js";import{X as K}from"./XAxis-C1WN-pkQ.js";import{L as v}from"./Legend-B1GxLWEZ.js";import{B as s}from"./Bar-CvLANxLU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Q7-QRRNs.js";import"./CartesianAxis-Cr_Ww8PH.js";import"./Layer-CuuZoUsG.js";import"./resolveDefaultProps-Z5NUUnaV.js";import"./Text-XHfzhZk8.js";import"./DOMUtils-D0co-hPv.js";import"./isWellBehavedNumber-wvIQrlfJ.js";import"./Label-DYMy2guT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNPe-074.js";import"./index-tgbEpTci.js";import"./index-D6CwE66r.js";import"./types-DPwewkdM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CxjdWKYi.js";import"./immer-CxjXtk_l.js";import"./RechartsWrapper-B7tC_WXo.js";import"./index-B1Z2mgyL.js";import"./index-CeNzyE2J.js";import"./axisSelectors-C8lj3akb.js";import"./d3-scale-C1j7mBel.js";import"./CartesianChart-BmPupl9-.js";import"./chartDataContext-C7_PfxRX.js";import"./CategoricalChart-Ytc03f7l.js";import"./Symbols-DH546CQx.js";import"./symbol-C5EhMhLR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D1RkL54t.js";import"./uniqBy-CBDL8fXr.js";import"./iteratee-BYmccGUz.js";import"./tooltipContext-z17QOzFZ.js";import"./ReactUtils-8Czxn-Uo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-yS7V0F_a.js";import"./useAnimationId-BckTdhqG.js";import"./ActiveShapeUtils-DWIyzqt2.js";import"./RegisterGraphicalItemId-f9q-fu78.js";import"./ErrorBarContext-C3dgZsKy.js";import"./GraphicalItemClipPath--wTpErch.js";import"./SetGraphicalItem-D2UHcxYS.js";import"./getZIndexFromUnknown-D1n9bhRw.js";import"./graphicalItemSelectors-DGMwM8cu.js";const ve={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
