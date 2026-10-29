import{r as f,R as e}from"./iframe-CA9m8GYo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CbW8C0_5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DtH5keZE.js";import{C as k}from"./ComposedChart-Cxv2A6YY.js";import{X as K}from"./XAxis-CC3YYdgQ.js";import{L as v}from"./Legend-CrU4twQ-.js";import{B as a}from"./Bar-D3_zL3hU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ekuzQLiz.js";import"./Text-BFxpfCQD.js";import"./resolveDefaultProps-CyX6DFN8.js";import"./pageBackground-O7JuB7S_.js";import"./ZIndexLayer-DnamAcTi.js";import"./index-CErELZnL.js";import"./index-BmamNDCv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C9u8TkQ8.js";import"./throttle-o0TVEzLp.js";import"./axisSelectors-BayOnfvg.js";import"./d3-scale-C2dTdr93.js";import"./CartesianAxis-D4TNjeO6.js";import"./Layer-Hxk-5S8n.js";import"./types-Cvx_7iJj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CIfh4CCk.js";import"./index-CqNMjBNA.js";import"./index-B2booWlS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-PB4GMrwR.js";import"./index-AvPiQd-I.js";import"./CartesianChart-BMo55UJv.js";import"./ZIndexPortal-CP5nbT1n.js";import"./CategoricalChart-CxzHbLbb.js";import"./Symbols-BokwsXNu.js";import"./symbol-DmvnuhBw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DILgA3Om.js";import"./uniqBy-Cx6V6RxR.js";import"./iteratee-BlwalV7N.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CV5x_Azz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bu0iEdVM.js";import"./useAnimationId-CvualzzB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DBAVXS8z.js";import"./tooltipContext-Pjqm9-1w.js";import"./dataEntryStyles-XE7WR2iA.js";import"./ErrorBarContext-DjcN2az-.js";import"./activeStyles-PpyfPCVq.js";import"./SetGraphicalItem-C9x_j8Aw.js";import"./getZIndexFromUnknown-CGbH__1H.js";import"./useEffectiveDataKey-VJMj_VC4.js";import"./omit-C6FqV6o3.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
