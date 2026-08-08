import{r as f,R as e}from"./iframe-D_g4F33S.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BeSx8PLK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-qk_W91LH.js";import{C as k}from"./ComposedChart-DYa_RjMP.js";import{X as K}from"./XAxis-D0V-DbQJ.js";import{L as v}from"./Legend-DP4hRnPN.js";import{B as s}from"./Bar-QEZabl8x.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-mwDIEaZu.js";import"./Text-dC5bBnrz.js";import"./resolveDefaultProps-BMNeBin1.js";import"./DOMUtils-D15rvujY.js";import"./isWellBehavedNumber-DbmSi19e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBemJ52Z.js";import"./index-bqb3oNhY.js";import"./index-DU-EG8Ox.js";import"./RechartsWrapper-CPYm6CLL.js";import"./index-DjQlfIyB.js";import"./index-RMAjGoM1.js";import"./throttle-C8ol7TbU.js";import"./axisSelectors-BTeU-Lnf.js";import"./d3-scale-CQkgQnoX.js";import"./renderedTicksSlice-9yA5jGLk.js";import"./CartesianAxis-eoFvh8zn.js";import"./Layer-CZAafMyB.js";import"./types-E4fDsamD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DEVDikLO.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C30ToINU.js";import"./chartDataContext-abfC3Iow.js";import"./CategoricalChart-Dp3h3G-T.js";import"./Symbols-vnU70vMn.js";import"./symbol-CvKw74Ax.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_pF2ZzE.js";import"./uniqBy-CTUiS_hF.js";import"./iteratee-D3RgNIdT.js";import"./tooltipContext-D8mn9KMy.js";import"./AnimatedItems-5bCKGYgm.js";import"./useAnimationId-F97RPKrS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYZZnEwA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-AssYUN6s.js";import"./RegisterGraphicalItemId-S9qjeBvy.js";import"./ErrorBarContext-j16ccEsR.js";import"./GraphicalItemClipPath-Ce5CheJW.js";import"./SetGraphicalItem-MWcQtcPB.js";import"./getZIndexFromUnknown-C2HFYVxN.js";import"./graphicalItemSelectors-DvjkEvTx.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
