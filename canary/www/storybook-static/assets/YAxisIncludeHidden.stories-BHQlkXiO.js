import{r as f,R as e}from"./iframe-C749ZEo3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B2DRI57X.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DkHm22lp.js";import{C as k}from"./ComposedChart-BDBDopuV.js";import{X as K}from"./XAxis-B1Zyj3MJ.js";import{L as v}from"./Legend-Dgt--ULT.js";import{B as s}from"./Bar-BrMNFoSQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CwN7eQSV.js";import"./Layer-FHePmoXC.js";import"./resolveDefaultProps-6zK50N0i.js";import"./Text-C7YPKDRG.js";import"./DOMUtils-D28hoCtk.js";import"./isWellBehavedNumber-tfpL7kaQ.js";import"./Label-SA_6xz2S.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPz0-wLY.js";import"./index-BvdVRi_-.js";import"./index-BBhpwV9s.js";import"./types-CCzU3Dbp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B967Fzve.js";import"./throttle-CELIeDih.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Mb5ys-Ox.js";import"./index-D27ZEbdc.js";import"./index-Cclh13Kt.js";import"./axisSelectors-DqDg1DKC.js";import"./d3-scale-DpaPidEg.js";import"./CartesianChart-B3fNYna3.js";import"./chartDataContext-D1rfIYla.js";import"./CategoricalChart-CQbOZOy_.js";import"./Symbols-F0I1p1Fo.js";import"./symbol-Dq2t-h2a.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D5wCeLQL.js";import"./uniqBy-gAFj75uR.js";import"./iteratee-BUXNkTTn.js";import"./tooltipContext-DPlYRDQn.js";import"./AnimatedItems-D44ZJFQN.js";import"./useAnimationId-BXnZ6W5r.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1n2gPHd-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6Wqxn4P9.js";import"./RegisterGraphicalItemId-HD16Gn5o.js";import"./ErrorBarContext-CXrvXgEG.js";import"./GraphicalItemClipPath-DnnLxorK.js";import"./SetGraphicalItem-JwiICpaG.js";import"./getZIndexFromUnknown-Cm9nyx4T.js";import"./graphicalItemSelectors-DA-YAlWN.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
