import{r as f,R as e}from"./iframe-Bxb7fTI_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-nAknvnvN.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dc8AhsBR.js";import{C as k}from"./ComposedChart-BUiYgrq1.js";import{X as K}from"./XAxis-CkOknljo.js";import{L as v}from"./Legend-DCZ3lJZn.js";import{B as s}from"./Bar-D-A_PtMs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CTFdx9tw.js";import"./Text-CjptF509.js";import"./resolveDefaultProps-BI7lk0Xh.js";import"./DOMUtils-pu9LPEtL.js";import"./isWellBehavedNumber-CwdI5Moi.js";import"./useId-BnCOmIJ8.js";import"./useBackwardsCompatibleTheme-4TZTHq_s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-oyOyBp5p.js";import"./index-Cx8Wpi4i.js";import"./index-Bo-C2AfN.js";import"./RechartsWrapper-DZ0rQEPQ.js";import"./index-DTEA-FIe.js";import"./index-C-XRKF5d.js";import"./throttle-CFHzUNT1.js";import"./axisSelectors-B6Hc05Ed.js";import"./d3-scale-Dc6IGH61.js";import"./renderedTicksSlice-CGX0B5OX.js";import"./CartesianAxis-CMkdpaa1.js";import"./Layer-DjfrzuA0.js";import"./types-sJxYiwgt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DeUsHf5g.js";import"./chartDataContext-BelA56cJ.js";import"./CategoricalChart-D-PTwWFe.js";import"./Symbols-S6zB6E4A.js";import"./symbol-DVgX-W97.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CvkVVO4z.js";import"./uniqBy-DL7Bhf0u.js";import"./iteratee-CRSpQ1DK.js";import"./AnimatedItems-C_-SWE1b.js";import"./useAnimationId-BhzzmCcY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCwWx1xN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bT-Xy9SL.js";import"./tooltipContext-CMpYJro3.js";import"./RegisterGraphicalItemId-B823gFGg.js";import"./ErrorBarContext-D8MkcOwe.js";import"./GraphicalItemClipPath-BKsG1i1n.js";import"./SetGraphicalItem-DB73g3d2.js";import"./getZIndexFromUnknown-59T52RrH.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DU_mD4XQ.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
