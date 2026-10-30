import{r as f,R as e}from"./iframe-C1szs8Ge.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BL_YScKz.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-2Z2wgmDW.js";import{C as k}from"./ComposedChart-CENNwY7-.js";import{X as K}from"./XAxis-DAR-gQPA.js";import{L as v}from"./Legend-EF6fUOtk.js";import{B as a}from"./Bar-BCMMQZF2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DKy-t54T.js";import"./Text-BAXgr8vS.js";import"./resolveDefaultProps-CIiYtXni.js";import"./DOMUtils-DrwuOTMG.js";import"./ZIndexLayer-n44qhyKx.js";import"./index-Bs58vI0d.js";import"./index-DcPa8fOp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Du9qp_Aq.js";import"./throttle-BnhEbDBT.js";import"./axisSelectors-D9npcJPs.js";import"./d3-scale-D4TUcbxA.js";import"./CartesianAxis-8dKjDOC0.js";import"./Layer-KO-TauTm.js";import"./types-DbKLPbYB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CTsziWKi.js";import"./index-CRFlBobz.js";import"./index-D0v9EDwx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-xd3kaPdN.js";import"./index-BmvynZon.js";import"./CartesianChart-CXVzGtkA.js";import"./ZIndexPortal-DqFnA3uG.js";import"./CategoricalChart-dJgQ9xv_.js";import"./Symbols-By-_RD8m.js";import"./symbol-D-xguMnA.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-DO3waM5C.js";import"./dataEntryStyles-D1ZH1qoE.js";import"./useElementOffset-B3huUP7p.js";import"./uniqBy-BgGgOORw.js";import"./iteratee-CroL2MN8.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-iP8lFrAf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Qa1VLo8n.js";import"./useAnimationId-Cg9ej0wY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cmzt23TH.js";import"./tooltipContext-Qg5R6Zry.js";import"./ErrorBarContext-C-G-Mak5.js";import"./activeStyles-CqRrjByh.js";import"./SetGraphicalItem-DIZkXs21.js";import"./getZIndexFromUnknown-COGfRxGI.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-SSLwUhsN.js";import"./omit-C154lu3f.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
