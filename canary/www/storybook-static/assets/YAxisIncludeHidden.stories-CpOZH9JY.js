import{r as f,R as e}from"./iframe-c2lRejlG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-A4qX3MrX.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CxBOtYNT.js";import{C as k}from"./ComposedChart-CI5mc4uI.js";import{X as K}from"./XAxis-CTi1ijiA.js";import{L as v}from"./Legend-pp2Qo9Sn.js";import{B as a}from"./Bar-uWSX3LlV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CYzJLkW1.js";import"./Text-DUu108CD.js";import"./resolveDefaultProps-Cd-PQ1DC.js";import"./ZIndexLayer-wT8ty6aL.js";import"./index-BPGiATtt.js";import"./index-IRYG05jg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CqGqTVQP.js";import"./throttle-CLdsKjkB.js";import"./axisSelectors-Deq2x5E-.js";import"./d3-scale-FKe385CS.js";import"./CartesianAxis-OWNbVRjL.js";import"./Layer-3thD2J8o.js";import"./types-DUYg5b1u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CI_7c3pA.js";import"./index-flaxi9nt.js";import"./index-DiQunSZN.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-7WfVgUuu.js";import"./index-DtkFulOp.js";import"./fillDefinitions-BJlWg_X2.js";import"./CartesianChart-B9TZHz33.js";import"./chartDataContext-D2dajo_O.js";import"./CategoricalChart-Da60SI3f.js";import"./Symbols-ZMuAovUW.js";import"./symbol-BTyzRL6J.js";import"./path-DyVhHtw_.js";import"./useElementOffset-u32tKDbG.js";import"./uniqBy-Dt7YDWvs.js";import"./iteratee-DhpUlMTO.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CPzad5xB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CubbKCjv.js";import"./useAnimationId-DpyYZ0R1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CM6VEkzu.js";import"./tooltipContext-KliIvhpK.js";import"./ErrorBarContext-DkK2QSGk.js";import"./activeStyles-71nScM55.js";import"./SetGraphicalItem-BqZrsCyw.js";import"./getZIndexFromUnknown-Dtf-bEKl.js";import"./useEffectiveDataKey-Dakyyayq.js";import"./omit-Y4TJw_z4.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
