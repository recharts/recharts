import{r as f,R as e}from"./iframe-DMwBeJR9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CzX5Dj-l.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BP1SI4lk.js";import{C as k}from"./ComposedChart-C1dXdi20.js";import{X as K}from"./XAxis-CXH1fd9N.js";import{L as v}from"./Legend-CQzlz703.js";import{B as a}from"./Bar-DjMhhasp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B67df_fL.js";import"./Text-BAFoSTNm.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./DOMUtils-DtiMQzYq.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CFNoJ68M.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./RechartsWrapper-DQf4ekbV.js";import"./axisSelectors-BzRm_10h.js";import"./throttle-JhdtWwel.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./index-KvfSCZEN.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./CartesianAxis-BJRJUBpp.js";import"./Layer-DMhp_Srr.js";import"./types-CMazcurm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./Symbols-tCjh6GHl.js";import"./symbol-C5kjLuRU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BgsP0NQQ.js";import"./uniqBy-BrSK9-IV.js";import"./iteratee-IvuUwhdK.js";import"./AnimatedItems-H6knMzOg.js";import"./useAnimationId-1Z-BMfjp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eD4VGTbA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9qWvVvy.js";import"./tooltipContext-BL0IMRcx.js";import"./RegisterGraphicalItemId-D2Rdl-pC.js";import"./ErrorBarContext-DyCS0eIu.js";import"./GraphicalItemClipPath-DH2vwsgS.js";import"./SetGraphicalItem-BmbkJBqp.js";import"./getZIndexFromUnknown-U3IR9nod.js";import"./useGraphicalItemIdentity-1ETpT5kl.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
