import{r as f,R as e}from"./iframe-CH2RirRG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-8oK4TXT2.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-EPNgUqra.js";import{C as k}from"./ComposedChart-B-gNv-fY.js";import{X as K}from"./XAxis-CqEbzlS_.js";import{L as v}from"./Legend-cl2YUlXM.js";import{B as s}from"./Bar-CrOvIUEB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-JTJpVxOG.js";import"./Text-D0Ni_nG3.js";import"./resolveDefaultProps-DE_sbK1H.js";import"./DOMUtils-CjXikq8H.js";import"./isWellBehavedNumber-DS-LXYSK.js";import"./useId-rSQwkCR7.js";import"./useBackwardsCompatibleTheme-B43Y9MW-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaLmvsT2.js";import"./index-CDgfCI1k.js";import"./index-BGjYA4Me.js";import"./RechartsWrapper-BjB8dZxg.js";import"./index-CO5DxbW1.js";import"./index-DCEj_OWD.js";import"./throttle-wiaHzbqm.js";import"./axisSelectors-CkKizBw1.js";import"./d3-scale-_MlV87vT.js";import"./renderedTicksSlice-p29IB_-G.js";import"./CartesianAxis-Bp_3tslY.js";import"./Layer-DUd8J6bA.js";import"./types-BWjPFUtA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-RyXtRN5Z.js";import"./chartDataContext-Bjvolui9.js";import"./CategoricalChart-DISzDu-A.js";import"./Symbols-DxsO4tVc.js";import"./symbol-9_1mDMDc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZbIepG_.js";import"./uniqBy-B9R5xbVR.js";import"./iteratee-DTZfeRvH.js";import"./AnimatedItems-CsoBD4nr.js";import"./useAnimationId-vcXUsSrn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ddm54g-k.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWoQL3Mu.js";import"./tooltipContext-B4uRuL9e.js";import"./RegisterGraphicalItemId-CdD2mOwf.js";import"./ErrorBarContext-CEgFqn-G.js";import"./GraphicalItemClipPath-D4fexUqU.js";import"./SetGraphicalItem-CVh4pOat.js";import"./getZIndexFromUnknown-KNKnA2EC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-qX5VSJNP.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
