import{r as f,R as e}from"./iframe-B8h9Wvr9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BfjaBbwl.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CVCC3Ewl.js";import{C as k}from"./ComposedChart-CihGBoly.js";import{X as K}from"./XAxis-ClvsjJJf.js";import{L as v}from"./Legend-_OI9Iew9.js";import{B as a}from"./Bar-CUjULqRW.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXlTd2CB.js";import"./get-CjriyByo.js";import"./Label-WZNKLfQt.js";import"./Text-DY2xd2YN.js";import"./ZIndexLayer-Bx5YOPf4.js";import"./index-CKXNY2A8.js";import"./index-R2j1A_a7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DvWUU3lc.js";import"./throttle-BfhZgz01.js";import"./axisSelectors-DxXHcDkW.js";import"./diverging-B3tlBIXY.js";import"./CartesianAxis-CJ6VDRMk.js";import"./Layer-BE-J6P8G.js";import"./types-BVLhjsLl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CV8xyIus.js";import"./index-DoR62jFZ.js";import"./index-DqggoQHU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-G4SBGBL6.js";import"./index-y0390T2N.js";import"./fillDefinitions-DTKKCxhO.js";import"./CartesianChart-Bkkx4Fnj.js";import"./chartDataContext-BVM5VACt.js";import"./CategoricalChart-CyVTcBSA.js";import"./Symbols-F7LNdmbs.js";import"./symbol-DHr3iGUB.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D5rr17de.js";import"./uniqBy-B4zow5Ey.js";import"./iteratee-BmZGYeAG.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Ba3L9xmJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DWu49_Dg.js";import"./useAnimationId-D5-dWWo1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pnsLPMUZ.js";import"./tooltipContext-DS16xuY4.js";import"./ErrorBarContext-Dq6hu0_F.js";import"./activeStyles-DVd5xcPq.js";import"./SetGraphicalItem-CUEe1yBW.js";import"./getZIndexFromUnknown-rYnYQ4W6.js";import"./useEffectiveDataKey-Bc62JqkW.js";import"./omit-Bw5jP466.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
