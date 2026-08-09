import{r as f,R as e}from"./iframe-CXzAxIFn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-wlQFPYGV.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DKHp-gjy.js";import{C as k}from"./ComposedChart-Dp1v7Rwh.js";import{X as K}from"./XAxis-CskEzE-5.js";import{L as v}from"./Legend-B0xzYbYL.js";import{B as s}from"./Bar-7Nw1RUS0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BVxyVS7u.js";import"./Text-CpguaXBO.js";import"./resolveDefaultProps-JH3hFqB6.js";import"./DOMUtils-tMvYpyJu.js";import"./isWellBehavedNumber-De_HX__8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-1UiKp4gF.js";import"./index-D8seYp4q.js";import"./index-CTRG8-wP.js";import"./RechartsWrapper-CktPaUvK.js";import"./index-ZTBFmJUb.js";import"./index-Bt5TuINX.js";import"./throttle-BEsGyRMh.js";import"./axisSelectors-BUJigeZt.js";import"./d3-scale-BDPPBhC0.js";import"./renderedTicksSlice-CEhRwZ6b.js";import"./CartesianAxis-DNVNHP1o.js";import"./Layer-ypGDY04h.js";import"./types-BCNeIHLh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CpUwpPC6.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-8S5--7wV.js";import"./chartDataContext-DY-mZyCM.js";import"./CategoricalChart-CEtFLcT-.js";import"./Symbols-M_D3JkXn.js";import"./symbol-BPpS_VN0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cj8IkOFp.js";import"./uniqBy-Bi1ukr1C.js";import"./iteratee-zjhPqw6K.js";import"./tooltipContext-3cpvxxGl.js";import"./AnimatedItems-DRjz3iml.js";import"./useAnimationId-BbyN3hun.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CIymDIR1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CfdhJDcC.js";import"./RegisterGraphicalItemId-CeJgXyMl.js";import"./ErrorBarContext-xfWRS9uR.js";import"./graphicalItemIdentity-D7fkuVDS.js";import"./SetGraphicalItem-CTeY4uJY.js";import"./getZIndexFromUnknown-Bos0m94y.js";import"./graphicalItemSelectors-CZZ-sSd8.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
