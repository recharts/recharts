import{r as f,R as e}from"./iframe-B27eVaFF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CC995jnJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DLq0QSm6.js";import{C as k}from"./ComposedChart-CYtA9C9q.js";import{X as K}from"./XAxis-C-VjsgkB.js";import{L as v}from"./Legend-iE0muHoS.js";import{B as s}from"./Bar-BEB0sS8R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BRxKQDDf.js";import"./CartesianAxis-1UkcRdSJ.js";import"./Layer-CvC1SkE0.js";import"./resolveDefaultProps-BE08UwbV.js";import"./Text-dTW2gHUK.js";import"./DOMUtils-DxsvOJTL.js";import"./isWellBehavedNumber-CotgHNs1.js";import"./Label-k_ca_Zdh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DlBEWXQx.js";import"./index-DoegUUyt.js";import"./index-DDpWztz3.js";import"./types-CkVecV7M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHlObRt7.js";import"./immer-YcLAmGMI.js";import"./RechartsWrapper-DlESZ7tm.js";import"./index-Cw-Wuc3D.js";import"./index-DI6zkpD0.js";import"./axisSelectors-DxuiIF3z.js";import"./d3-scale-BTGRH2n_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Bm35oZlB.js";import"./chartDataContext-Cx0GXsRx.js";import"./CategoricalChart-DFkUIq_Y.js";import"./Symbols-DHmT1gXs.js";import"./symbol-DcOqxn3y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-IkfKbF5l.js";import"./uniqBy-BtjkBcJS.js";import"./iteratee-B8u85uZV.js";import"./tooltipContext-C98TgMUl.js";import"./AnimatedItems-6YxWbeO7.js";import"./useAnimationId-BitHcKd_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCqcMhZI.js";import"./ActiveShapeUtils-Bzy2q7aU.js";import"./RegisterGraphicalItemId-oZqB1u6h.js";import"./ErrorBarContext-tb2PhcR_.js";import"./GraphicalItemClipPath-BA_nO_Lx.js";import"./SetGraphicalItem-DWdSfkk6.js";import"./getZIndexFromUnknown-Bbjiz8cI.js";import"./graphicalItemSelectors-BJuoZRjX.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
