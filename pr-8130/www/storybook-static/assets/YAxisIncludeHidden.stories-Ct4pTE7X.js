import{r as f,R as e}from"./iframe-BmS0ecXK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-p6gtuiCl.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ChtzqxIP.js";import{C as k}from"./ComposedChart-DaLh_jdc.js";import{X as K}from"./XAxis-Bh2usn2R.js";import{L as v}from"./Legend-CLhfiF0I.js";import{B as a}from"./Bar-DSqtxRpI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-xOYEqHzO.js";import"./Text-Cy6IgmxI.js";import"./resolveDefaultProps-L-kb5cDL.js";import"./DOMUtils-nGO8S--J.js";import"./ZIndexLayer-CGSpKlNm.js";import"./index-CdWOU_Jt.js";import"./index-CT2dpPb1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CE28gFQQ.js";import"./throttle-OPlZV-qu.js";import"./axisSelectors-BzqnuZDm.js";import"./d3-scale-3fk2W2Xu.js";import"./CartesianAxis-Brh0Ot5h.js";import"./Layer-BUeogdZj.js";import"./types-BFfgrH_g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DE9Jk9Mo.js";import"./index-S9VbsYVM.js";import"./index-B2CB0vSq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CUI9gBJC.js";import"./index-B9xLgKg_.js";import"./fillDefinitions-BfTN52CB.js";import"./CartesianChart-MAWW00G9.js";import"./ZIndexPortal-BBTCIcjJ.js";import"./CategoricalChart-Y8ADkKU9.js";import"./Symbols-D9BPgtte.js";import"./symbol-BAUa8x3O.js";import"./path-DyVhHtw_.js";import"./useElementOffset-EBCaWoeA.js";import"./uniqBy-3a9GARB0.js";import"./iteratee-Cu9W3M9t.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-HbN4s7ci.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ-oVzUh.js";import"./useAnimationId-CpCNOV8e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-UpE3VQFE.js";import"./tooltipContext-VmrjPqqA.js";import"./dataEntryStyles-BusWIJtt.js";import"./ErrorBarContext-D4UbmXd_.js";import"./activeStyles-D5Ig3nSZ.js";import"./SetGraphicalItem-DxeCv-Nd.js";import"./getZIndexFromUnknown-BsWelO8Z.js";import"./useEffectiveDataKey-1aGsCLfO.js";import"./omit-DLYgWUT8.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
