import{r as f,R as e}from"./iframe-xbzO8ihI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DldbyKuF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DHGEGTXf.js";import{C as k}from"./ComposedChart-D7Lr4F7H.js";import{X as K}from"./XAxis-DsYRd7p5.js";import{L as v}from"./Legend-BapYq9du.js";import{B as s}from"./Bar-CFi2iEef.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Db5UOJ54.js";import"./Text-DyvJm0Va.js";import"./resolveDefaultProps-BksGg43P.js";import"./DOMUtils-BBUQNy1o.js";import"./isWellBehavedNumber-BpEs7sJw.js";import"./useId-BsQI64Io.js";import"./useBackwardsCompatibleTheme-BaDaWPI3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CdA1EieN.js";import"./index-BqW4Uzzs.js";import"./index-Db_N0V-Y.js";import"./RechartsWrapper-B40yK-0z.js";import"./axisSelectors-D-N5tVUk.js";import"./throttle-CSfITKZw.js";import"./d3-scale-C-XGUw-P.js";import"./index-Bw8yyLrA.js";import"./index-VAUYyiDQ.js";import"./renderedTicksSlice-BCm2ZtcS.js";import"./index-DNQsy-E5.js";import"./CartesianAxis-D6daOnac.js";import"./Layer-CyOAhwla.js";import"./types-DVHQQz9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CVt6roZ8.js";import"./chartDataContext-DjNdQ09m.js";import"./CategoricalChart-Btyj_0ug.js";import"./Symbols-BtGFaNTe.js";import"./symbol-D6-nJAG5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bp43p8yN.js";import"./uniqBy--5lFk6DW.js";import"./iteratee-DbaMtUdN.js";import"./AnimatedItems-GZSCW2O0.js";import"./useAnimationId-n5GjykVw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOVHDpEg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EHYmL-db.js";import"./tooltipContext-GcrjWPb2.js";import"./RegisterGraphicalItemId-B8RWrhFG.js";import"./ErrorBarContext-DuvOSHRK.js";import"./GraphicalItemClipPath-C_jr7WWD.js";import"./SetGraphicalItem-C2V6xjnq.js";import"./getZIndexFromUnknown-CwJWcRq4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DeaTRdU-.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
