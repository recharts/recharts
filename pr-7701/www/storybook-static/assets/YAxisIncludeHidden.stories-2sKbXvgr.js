import{r as f,R as e}from"./iframe-BTdOdF9K.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D6a9CyOE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CcQiDZWo.js";import{C as k}from"./ComposedChart-BNTkSnPn.js";import{X as K}from"./XAxis-BHkAQnNg.js";import{L as v}from"./Legend-CTek2g6f.js";import{B as s}from"./Bar-BDt4Qdyi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cm499Ers.js";import"./Text-ad69v4o0.js";import"./resolveDefaultProps-CYx6Kk4A.js";import"./DOMUtils-D3jMOIM3.js";import"./isWellBehavedNumber-ZiYy0LNM.js";import"./useId-R0lZrYSa.js";import"./useBackwardsCompatibleTheme-CO-7LDmO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C5GGlVd8.js";import"./index-Cq8tu8wQ.js";import"./index-Ced2HG28.js";import"./RechartsWrapper-DRLvm4aR.js";import"./axisSelectors-CEXy452f.js";import"./throttle-BGr8RGVS.js";import"./d3-scale-B2K1_ofr.js";import"./index-uQqEtlSq.js";import"./index-CwuReyQ-.js";import"./renderedTicksSlice-CwdI_hq1.js";import"./index-DifGdyog.js";import"./CartesianAxis-Bjag6PpJ.js";import"./Layer-BIBCumPU.js";import"./types-DjPeWPew.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DxgKFkUN.js";import"./chartDataContext-BIlbUR4j.js";import"./CategoricalChart-CWtNWW3W.js";import"./Symbols-1hS8x8It.js";import"./symbol-4RT96rpw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CabjllZT.js";import"./uniqBy-w2GX_Mj8.js";import"./iteratee-BGtIuJre.js";import"./AnimatedItems-DKFfKX33.js";import"./useAnimationId-C9O8Tbu7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CD06WOQp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HwCQ4yPj.js";import"./tooltipContext-ov1xHh4L.js";import"./RegisterGraphicalItemId-CtQfyEXD.js";import"./ErrorBarContext-CqdXJ3Jz.js";import"./GraphicalItemClipPath-BNHF0YUS.js";import"./SetGraphicalItem-CBZad1k7.js";import"./getZIndexFromUnknown-C6NCYuCD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-AK-DwY1O.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
