import{r as f,R as e}from"./iframe-BRs2DqB3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DidbNqGc.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-XRTrDK7l.js";import{C as k}from"./ComposedChart-DVPdEFZp.js";import{X as K}from"./XAxis-BJyhb9sC.js";import{L as v}from"./Legend-aPOwwcA9.js";import{B as a}from"./Bar-BJb5F-sS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-utTJNWp0.js";import"./Text-DRaltNnR.js";import"./resolveDefaultProps-BRTztjAc.js";import"./ZIndexLayer-BCRtaoEe.js";import"./index-CqTGU6qX.js";import"./index-C0uv-V1O.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DwLugqE9.js";import"./throttle-BN55ZsBD.js";import"./axisSelectors-DBUHuATQ.js";import"./d3-scale-B39-KfBv.js";import"./CartesianAxis-C23TAeVf.js";import"./Layer-DqrqtEm2.js";import"./types-BN549hIA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BjdRfY4C.js";import"./index-BL5_00_X.js";import"./index-Co-V1H3-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CJYaD9xA.js";import"./index-IgyX-1iw.js";import"./fillDefinitions-Cww6uxJT.js";import"./CartesianChart-Dsxkw-P3.js";import"./chartDataContext-QcS0sZvi.js";import"./CategoricalChart-BZHqfx2A.js";import"./Symbols-Cy-ALuGW.js";import"./symbol-rCFxuDnc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjI6NDB8.js";import"./uniqBy-aZImii2x.js";import"./iteratee-CrjEP9l6.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-B5I1MPoS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BivqHDne.js";import"./useAnimationId-De06VpE9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cvk6a1r9.js";import"./tooltipContext-Datniygv.js";import"./ErrorBarContext-D0NsIgk-.js";import"./activeStyles-gnY1xuwf.js";import"./SetGraphicalItem-C9srr3mG.js";import"./getZIndexFromUnknown-D7iRE9IP.js";import"./useEffectiveDataKey-_AqelCoa.js";import"./omit-Bx3nEryi.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
