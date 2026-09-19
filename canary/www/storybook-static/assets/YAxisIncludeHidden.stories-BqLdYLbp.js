import{r as f,R as e}from"./iframe-EacBJx3u.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-qieo9xUf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BiNX82M2.js";import{C as k}from"./ComposedChart-DLV9kOGF.js";import{X as K}from"./XAxis-Cl6K2xWP.js";import{L as v}from"./Legend-DUal1kSr.js";import{B as a}from"./Bar-C_JTEMI5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DrX_jEaz.js";import"./Text-DusUwDRl.js";import"./resolveDefaultProps-Pp64jnNu.js";import"./DOMUtils-R4-PljPA.js";import"./isWellBehavedNumber-cllAzHLG.js";import"./useId-Cx3ryNMd.js";import"./useBackwardsCompatibleTheme-C878E-FF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbjobkdE.js";import"./index-zONtSjtR.js";import"./index-Cp5XPxNK.js";import"./RechartsWrapper-DvnaJvMy.js";import"./axisSelectors-BsKbaT3c.js";import"./throttle-CQWyIvYS.js";import"./d3-scale-XN8I2g_L.js";import"./index-Cjnu8Ghr.js";import"./index-DAXn18Z3.js";import"./renderedTicksSlice-Bi45b659.js";import"./index-BWFLwSJj.js";import"./CartesianAxis-DHoeZLWk.js";import"./Layer-BUsl6vHA.js";import"./types-CDt3wtpt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CpkU4zi_.js";import"./chartDataContext-6_AZEoRj.js";import"./CategoricalChart-DR3NAbyi.js";import"./Symbols-DQqKkMeQ.js";import"./symbol-Gpg8Q1c8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CW3PsA1I.js";import"./uniqBy-DulbN1k2.js";import"./iteratee-CZcssftL.js";import"./AnimatedItems-CgPok0XL.js";import"./useAnimationId-BrvpB7V7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcRh70Ua.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D1Q_UPVj.js";import"./tooltipContext-DT1bcwJ-.js";import"./RegisterGraphicalItemId-C6xi7qpR.js";import"./ErrorBarContext-Di28pWGd.js";import"./GraphicalItemClipPath-DdpslyMR.js";import"./SetGraphicalItem-DIVfOwKJ.js";import"./getZIndexFromUnknown-DjToVp6t.js";import"./useGraphicalItemIdentity-PgG_6CLw.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
