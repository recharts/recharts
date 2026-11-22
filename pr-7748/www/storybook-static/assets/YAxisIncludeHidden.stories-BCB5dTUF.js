import{r as f,R as e}from"./iframe-C2FiVbx6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-H-bG_GIE.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CIwOLMY2.js";import{C as k}from"./ComposedChart-Bj-Vd15E.js";import{X as K}from"./XAxis-BpwUAM2i.js";import{L as v}from"./Legend-CeXqnuvF.js";import{B as a}from"./Bar-BEN9Yk2L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-oSfspIu2.js";import"./Text-DUuV2-iR.js";import"./resolveDefaultProps-CRuYPp9Y.js";import"./ZIndexLayer-CyqrJVrU.js";import"./index-abbND0en.js";import"./index-qkgHpql3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bm0LaijP.js";import"./throttle-Cf_mfeUw.js";import"./axisSelectors-DzJ8Skeq.js";import"./d3-scale-Dmh-LY51.js";import"./CartesianAxis-LjFWWnk2.js";import"./Layer-BbCOnDJZ.js";import"./types-CTWOnDaX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DfOOwYLv.js";import"./index-2QDsETde.js";import"./index-CRK-dYW4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CzRJf9wd.js";import"./index-CmXMjoXJ.js";import"./fillDefinitions-0TcAAZ0C.js";import"./CartesianChart-DXHWhKco.js";import"./chartDataContext-CxmIzf3r.js";import"./CategoricalChart-CH_w6Aat.js";import"./Symbols-D3G4ac0V.js";import"./symbol-By85hRRg.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D2fgVs1p.js";import"./uniqBy-83-1iH4D.js";import"./iteratee-D1g8o1KX.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Cr8Jhwhl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COqz7K3J.js";import"./useAnimationId-DeWO3OMz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-xS0QhUpf.js";import"./tooltipContext-DqGlosK_.js";import"./ErrorBarContext-Bl0bf3v5.js";import"./activeStyles-Cz6uJME2.js";import"./SetGraphicalItem-CdikQP2n.js";import"./getZIndexFromUnknown-Dc5vCIAz.js";import"./useEffectiveDataKey-pHEaOl4p.js";import"./omit-Btzb6-J4.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
