import{r as f,R as e}from"./iframe-B8oHBE2B.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-xlwnxq94.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CY69X-_e.js";import{C as k}from"./ComposedChart-D7HXrnrm.js";import{X as K}from"./XAxis-ZjtmoAYX.js";import{L as v}from"./Legend-DfVTvwto.js";import{B as a}from"./Bar-CpeDegw6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Do0pS3hb.js";import"./Text-CvT3zU9x.js";import"./resolveDefaultProps-CgUiyAYX.js";import"./ZIndexLayer-ctGMKsDO.js";import"./index-DmSsi07Q.js";import"./index-cJCZbnBh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2FYbhjQ.js";import"./throttle-CUYrrG0C.js";import"./axisSelectors-Ds5h7JK9.js";import"./d3-scale-CbMuV4Xw.js";import"./CartesianAxis-DLXM_Mrp.js";import"./Layer-d-LKmDNk.js";import"./types-pqA8tR2L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-a5-uxQKT.js";import"./index-DMrvH4_y.js";import"./index-DGZRfgJf.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DFBUYq9O.js";import"./index-BO756sza.js";import"./fillDefinitions-DKQEn6JZ.js";import"./CartesianChart-Cx94wGq6.js";import"./chartDataContext-DF9RfUto.js";import"./CategoricalChart-B_DdruJc.js";import"./Symbols-DlTVDDFq.js";import"./symbol-DwKqx-k1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BUgTmqWV.js";import"./uniqBy-CWI3Th2f.js";import"./iteratee-BSURygRC.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BdZkCN9m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSfNDwxH.js";import"./useAnimationId-DstXvFRQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DvU5i_JD.js";import"./tooltipContext-BqMPDS13.js";import"./ErrorBarContext-FVg_hFB1.js";import"./activeStyles-B9e3PXPC.js";import"./SetGraphicalItem-CNXf_JK1.js";import"./getZIndexFromUnknown-C1iuqT_v.js";import"./useEffectiveDataKey-R28HVoPp.js";import"./omit-DCLQHFbq.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
