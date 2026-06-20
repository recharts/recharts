import{r as f,R as e}from"./iframe-C2Yu5A-b.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CAeM0KFi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-tndcr-lp.js";import{C as k}from"./ComposedChart-Cfc9HyP7.js";import{X as K}from"./XAxis-WqnJVPHT.js";import{L as v}from"./Legend-Bb8Czknq.js";import{B as s}from"./Bar-3d9pPyoj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-sXbEBADG.js";import"./CartesianAxis-Che9oLkh.js";import"./Layer-B5f-JESM.js";import"./resolveDefaultProps-Bpz2fUNW.js";import"./Text-nteLn1KQ.js";import"./DOMUtils-D5PdJ1Ca.js";import"./isWellBehavedNumber-hO-3eJ3M.js";import"./Label-5FD90Jk0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DuYz_T9C.js";import"./index-Crtw70Th.js";import"./index-Bw2J7CiK.js";import"./types-D2qrwj6D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRR4JQds.js";import"./immer-Dw4t5i4O.js";import"./RechartsWrapper-DLm4movc.js";import"./index-Cf-iiIX8.js";import"./index-RvHlbfdo.js";import"./axisSelectors-ldKOVrRn.js";import"./d3-scale-CalfYQM5.js";import"./CartesianChart-GviTQT_7.js";import"./chartDataContext-BCayYLP6.js";import"./CategoricalChart-CfUCGvtZ.js";import"./Symbols-OVliTJ0w.js";import"./symbol-BfsTRDbP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D1jcGseP.js";import"./uniqBy-EOs9hKbg.js";import"./iteratee-BIwzy5Sd.js";import"./tooltipContext-CMoxRMY5.js";import"./AnimatedItems-Bx_qRQBs.js";import"./useAnimationId-_dE112Ua.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYfm48t9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BR-aw80X.js";import"./RegisterGraphicalItemId-BBUK6ex4.js";import"./ErrorBarContext-CB1md74y.js";import"./GraphicalItemClipPath-ByyRz6Zm.js";import"./SetGraphicalItem-B-XBlhKJ.js";import"./getZIndexFromUnknown-J6YUZqTR.js";import"./graphicalItemSelectors-B9Lu1HbA.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
