import{r as f,R as e}from"./iframe-C1xjtyup.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-D19WlBcl.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CK_7sDhl.js";import{C as k}from"./ComposedChart-9HbcDPNP.js";import{X as K}from"./XAxis-yfo5ibqs.js";import{L as v}from"./Legend-hwTMgKrZ.js";import{B as a}from"./Bar-wQ6lyeaX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-rlFXaG67.js";import"./Text-dB1JvKf5.js";import"./resolveDefaultProps-BW194xym.js";import"./DOMUtils-DjnwPC-N.js";import"./ZIndexLayer-BioPoHSu.js";import"./index-C89VIpwW.js";import"./index-D-Z5HFQV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-XOgxAb5A.js";import"./throttle-DeB2d41h.js";import"./axisSelectors-CL5t64V7.js";import"./d3-scale-CfSN9o3v.js";import"./CartesianAxis-gqJanQvj.js";import"./Layer-DgAL7HSK.js";import"./types-BMA5Z4Oj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DT_F_kFQ.js";import"./index-B3Q9mRXR.js";import"./index-DZVn9IOu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-g7B-Y0pQ.js";import"./index-DNbtHs3M.js";import"./fillDefinitions-Chc0NBrg.js";import"./CartesianChart-CiggLvKc.js";import"./ZIndexPortal-ltJzS4wp.js";import"./CategoricalChart-DLW54M1r.js";import"./Symbols-DFo4fcMi.js";import"./symbol-DYSn4PiC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-lJW-fFdI.js";import"./uniqBy-AdfipyG1.js";import"./iteratee-Cpl52XgC.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DlsMy8UK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pWpz6jQo.js";import"./useAnimationId-BHg-nTIp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJp5D_xQ.js";import"./tooltipContext-B1k4F_lJ.js";import"./dataEntryStyles-CoAbyOEr.js";import"./ErrorBarContext-DT5kzwJ3.js";import"./activeStyles-MqObX4-I.js";import"./SetGraphicalItem-f1KdcC0B.js";import"./getZIndexFromUnknown-C1tDfpkk.js";import"./useEffectiveDataKey-C_d_9it0.js";import"./omit-zAXBsbCp.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
