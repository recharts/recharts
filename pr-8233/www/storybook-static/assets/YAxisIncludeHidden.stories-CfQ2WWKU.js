import{r as f,R as e}from"./iframe-C_daZv7l.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DVc3O9Qy.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dlp28lA6.js";import{C as k}from"./ComposedChart-bOkTSI7z.js";import{X as K}from"./XAxis-zsBA2PQk.js";import{L as v}from"./Legend-fewrjBRw.js";import{B as a}from"./Bar-Dof3eC-w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DbTfJXbl.js";import"./Text-DFRkhFZm.js";import"./resolveDefaultProps-CWP-gMuW.js";import"./ZIndexLayer-CwM562V-.js";import"./index-7cXIOsrg.js";import"./index-D1CrGIf7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CT8xWjbN.js";import"./throttle-BHZ2wlOs.js";import"./axisSelectors-BlfT440m.js";import"./d3-scale-Dz0Pmj0c.js";import"./CartesianAxis-CWZlckQG.js";import"./Layer-WPlXRukA.js";import"./types-BRKFz9xC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyloxQ1c.js";import"./index-CJJC3II6.js";import"./index-DBxUtF6C.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CgMr-Xnd.js";import"./index-CEW7yT3i.js";import"./fillDefinitions-BNbyE3VE.js";import"./CartesianChart-a1M-eJU5.js";import"./chartDataContext-D1D0-RnX.js";import"./CategoricalChart-D48joeLJ.js";import"./Symbols-3hlYR6yc.js";import"./symbol-C8mAwliN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dy4wSkY8.js";import"./uniqBy-DXIPSdGO.js";import"./iteratee-Bz-Pka1B.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BrtwCCRb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqgZTLn6.js";import"./useAnimationId-BeVDdEFy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DH0fW0Mt.js";import"./tooltipContext-CpWkqvzS.js";import"./ErrorBarContext-Cc5g1M1Q.js";import"./activeStyles-DqPxAQkX.js";import"./SetGraphicalItem-C7RTXSJB.js";import"./getZIndexFromUnknown-BWn-VTVn.js";import"./useEffectiveDataKey-CLct0de8.js";import"./omit-Dc5z_Oun.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
