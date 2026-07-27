import{r as f,R as e}from"./iframe-Dk6QtUOm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-5MZ6qw-w.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DIYdct83.js";import{C as k}from"./ComposedChart-DFYiCo3a.js";import{X as K}from"./XAxis-DpzwYtrF.js";import{L as v}from"./Legend-Bj5CS1_f.js";import{B as s}from"./Bar-Dm7i-Knc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BFE0ezxc.js";import"./Layer-CriLvMlw.js";import"./resolveDefaultProps-iHCSp8Qu.js";import"./Text-B_RemiZL.js";import"./DOMUtils-C0erXEEq.js";import"./isWellBehavedNumber-D_eFFsbn.js";import"./Label-Cv9o4t_y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CQwtlObF.js";import"./index-DoZuvuq0.js";import"./index-U7zmREmi.js";import"./types-Df8kiDN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1Do5QcM1.js";import"./throttle-D98VVn5G.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DtQEiJyx.js";import"./index-COkLsuib.js";import"./index-DoCUyrNc.js";import"./axisSelectors-D6uzbqkR.js";import"./d3-scale-B2mup6zM.js";import"./CartesianChart-BPW_q9xK.js";import"./chartDataContext-BWXJwi3S.js";import"./CategoricalChart-DDK0QtzY.js";import"./Symbols-_cvEA0x0.js";import"./symbol-DQm7NK9B.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDl8IrDv.js";import"./uniqBy-DUa1oDxC.js";import"./iteratee-qwNKeEU2.js";import"./tooltipContext-CGoUR7V-.js";import"./AnimatedItems-CpjG7pC9.js";import"./useAnimationId-BV1Lvx7_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COIgOmTW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJey3tMT.js";import"./RegisterGraphicalItemId-DRrwgsJN.js";import"./ErrorBarContext-60D9zT8I.js";import"./GraphicalItemClipPath-DJOu5Ece.js";import"./SetGraphicalItem-D9C9m9l_.js";import"./getZIndexFromUnknown-C8MNKym9.js";import"./graphicalItemSelectors-D7E0zvZ3.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
