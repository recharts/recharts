import{r as f,R as e}from"./iframe-DlCdq56B.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CiL6lsrt.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-AxtVyY3Z.js";import{C as k}from"./ComposedChart-D-HLNOcj.js";import{X as K}from"./XAxis-BSv-cfqy.js";import{L as v}from"./Legend-C0cyFPQv.js";import{B as a}from"./Bar-CFvlKN2g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DhxtC2yH.js";import"./Text-DCVc9tCi.js";import"./resolveDefaultProps-BUW76FaL.js";import"./ZIndexLayer-DoM1zDnE.js";import"./index-DRrdDGzH.js";import"./index-D0nmcM1A.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B-SnaQvT.js";import"./throttle-DEcvUi6F.js";import"./axisSelectors-CSfGPpIK.js";import"./d3-scale-3Jo-Yey1.js";import"./CartesianAxis-gaRy0kAT.js";import"./Layer-DYaOGPQe.js";import"./types-CGD2CGOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xGoci0dc.js";import"./index-Dl9VO4In.js";import"./index-CPJJsZF5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-fp3cwEAp.js";import"./index-CVrMJXNG.js";import"./fillDefinitions-P9YSjlZq.js";import"./CartesianChart-DAQanSbx.js";import"./chartDataContext-BiLGYApi.js";import"./CategoricalChart-DEbdQdFq.js";import"./Symbols-Dqo2PD8d.js";import"./symbol-BfVO91QA.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D9xfe4ty.js";import"./uniqBy-7nQNTfGC.js";import"./iteratee-D1UWDese.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BQcljHLn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bks-uWZg.js";import"./useAnimationId-DvgYyN8a.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BhCU4_aJ.js";import"./tooltipContext-DItjFBJq.js";import"./ErrorBarContext-C53AQX2l.js";import"./activeStyles-WuCpdruK.js";import"./SetGraphicalItem-DVkPEJIv.js";import"./getZIndexFromUnknown-Kou9TEwm.js";import"./useEffectiveDataKey-dLwdu-vi.js";import"./omit-DHFyvxhF.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
