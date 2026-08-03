import{r as f,R as e}from"./iframe-BvoaHdmy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-m3S-JfIe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bsr7cBhR.js";import{C as k}from"./ComposedChart-91fEDFol.js";import{X as K}from"./XAxis-CDpMlutO.js";import{L as v}from"./Legend-kPzq7o2Z.js";import{B as s}from"./Bar-BqFTplSB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DD7tXZFM.js";import"./Text-D4sNDUmz.js";import"./resolveDefaultProps-DcaR1-NP.js";import"./DOMUtils-DEiR2hJy.js";import"./isWellBehavedNumber-BXi0lz-u.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJa50qFF.js";import"./index-B_-FbWrF.js";import"./index-BIiBQ2RS.js";import"./RechartsWrapper-DtuASqVJ.js";import"./index-b13xllOW.js";import"./index-DeegS3pB.js";import"./throttle-DQ4zUznN.js";import"./renderedTicksSlice-BOmSwCSv.js";import"./axisSelectors-Choe--Hk.js";import"./d3-scale-DHqQWI-P.js";import"./CartesianAxis-BTq7uWzR.js";import"./Layer-NFFKs1EA.js";import"./types-Df8Ct0Qg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-w6Fo4fMR.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DoxhMpsB.js";import"./chartDataContext-ChSxK7K-.js";import"./CategoricalChart-B1Q3to5_.js";import"./Symbols-CxvE_--r.js";import"./symbol-CvaxCqXB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qwTb_lvS.js";import"./uniqBy-CX18kgZb.js";import"./iteratee-Br4cA1kY.js";import"./tooltipContext-BREBg-8L.js";import"./AnimatedItems-xGZjbukT.js";import"./useAnimationId-CWnbJHBU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2ErbMHg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DD4sF3hm.js";import"./RegisterGraphicalItemId-pYDAMd0U.js";import"./ErrorBarContext-Dvj--byz.js";import"./GraphicalItemClipPath-CYhIxWIa.js";import"./SetGraphicalItem-CAucCLNl.js";import"./getZIndexFromUnknown-D0O9tR37.js";import"./graphicalItemSelectors-DAjlU7PT.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
