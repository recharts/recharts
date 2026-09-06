import{r as f,R as e}from"./iframe-DEExurmE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-jXESqwAs.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BGV3a2M2.js";import{C as k}from"./ComposedChart-CdFnUaqK.js";import{X as K}from"./XAxis-DlU7zrsS.js";import{L as v}from"./Legend-B-vxIPtA.js";import{B as s}from"./Bar-FdTuVtpl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BoesgQTr.js";import"./Text-DlL7Kh0g.js";import"./resolveDefaultProps-BcKMyFDK.js";import"./DOMUtils-DiHJPz-Q.js";import"./isWellBehavedNumber-h6OQjVbf.js";import"./useId-BEPz2e1p.js";import"./useBackwardsCompatibleTheme-DNIYdIZM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DsOTHSzU.js";import"./index-D05g3ibA.js";import"./index-DSqfHUGS.js";import"./RechartsWrapper-BERQZkXB.js";import"./axisSelectors-B3HyN164.js";import"./throttle-D7dQEHKF.js";import"./d3-scale-Bb2cyBTe.js";import"./index-D4ICS-Fc.js";import"./index-BzthVEqH.js";import"./renderedTicksSlice-By6AytUE.js";import"./index-DRipnBKQ.js";import"./CartesianAxis-BAF_XLat.js";import"./Layer-Bb6nRq1I.js";import"./types-D0GbM314.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cucr_Qkz.js";import"./chartDataContext-lhhxrqB4.js";import"./CategoricalChart-DNtGewyR.js";import"./Symbols-CvdOzUou.js";import"./symbol-Df6LD2PS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Docjled6.js";import"./uniqBy-DCAZgwHa.js";import"./iteratee-2zI7IteD.js";import"./AnimatedItems-BsILchAj.js";import"./useAnimationId-BnI4HmeK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVS7WkKL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrsX7S50.js";import"./tooltipContext-BEl9WPp6.js";import"./RegisterGraphicalItemId-CZwjt8x7.js";import"./ErrorBarContext-DvbJvmom.js";import"./GraphicalItemClipPath-BG1GR_PS.js";import"./SetGraphicalItem-DexHK8W5.js";import"./getZIndexFromUnknown-Bhd8QCLO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cek_l9p3.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
