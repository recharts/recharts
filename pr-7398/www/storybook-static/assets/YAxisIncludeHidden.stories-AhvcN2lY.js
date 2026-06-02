import{P as f,c as e}from"./iframe-NcbJjIA-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-ChVwWRRp.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-aCnp2Btu.js";import{C as k}from"./ComposedChart-DfrMZJ_4.js";import{X as K}from"./XAxis-DiCo7qCN.js";import{L as v}from"./Legend-qw_bLgp_.js";import{B as s}from"./Bar-B5zPHW37.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DHJyV6O8.js";import"./CartesianAxis-psqNgsI7.js";import"./Layer-DCqaOLDO.js";import"./resolveDefaultProps-9rxZz0BJ.js";import"./Text-DqOWrbn9.js";import"./DOMUtils-VR3x78qW.js";import"./isWellBehavedNumber-CRF88Te0.js";import"./Label-CCVmR4pI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HA7Kz5Ib.js";import"./index-YT6PLmfy.js";import"./index-B2hMZxT9.js";import"./types-B9riDZKf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CazECbsF.js";import"./immer-BrPcfpKJ.js";import"./RechartsWrapper-C1F7SUdh.js";import"./index-CASzwsd1.js";import"./index-CFcgoPKL.js";import"./axisSelectors--8zPyqGt.js";import"./d3-scale-B1TlVjVH.js";import"./CartesianChart-nvfGUb02.js";import"./chartDataContext-D7rZipVq.js";import"./CategoricalChart-DRPlCLZK.js";import"./Symbols-BOpRBbG3.js";import"./symbol-HKiBMLzb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BKMYYN7l.js";import"./uniqBy-DcnQgaYm.js";import"./iteratee-BM8l9ZPr.js";import"./tooltipContext-C_C4jXBA.js";import"./ReactUtils-DWeLU6sY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-mfMkikui.js";import"./useAnimationId-DLPXxqZ8.js";import"./ActiveShapeUtils-BwCeE1t9.js";import"./RegisterGraphicalItemId-BKDuHm0F.js";import"./ErrorBarContext-B9yYejtE.js";import"./GraphicalItemClipPath-Ck3Yxo8v.js";import"./SetGraphicalItem-BB4v-B7H.js";import"./getZIndexFromUnknown-Cmb-RlB6.js";import"./graphicalItemSelectors-_gD5Ywq2.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
