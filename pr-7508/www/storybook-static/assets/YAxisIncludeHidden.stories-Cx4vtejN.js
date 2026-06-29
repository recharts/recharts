import{r as f,R as e}from"./iframe-CCxa2X_3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-LHNbupxO.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CjS-6Q6g.js";import{C as k}from"./ComposedChart-C30GB46c.js";import{X as K}from"./XAxis-DgXTsbE5.js";import{L as v}from"./Legend-BrRZ-j69.js";import{B as s}from"./Bar-CnPZd7_M.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BWGRxCzY.js";import"./CartesianAxis-06zEjNAD.js";import"./Layer-DSUD-a_F.js";import"./resolveDefaultProps-DiPmn6d5.js";import"./Text-zmbPwYi6.js";import"./DOMUtils-D9dcGvYT.js";import"./isWellBehavedNumber-D-qJMApD.js";import"./Label-BbbTGnnM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DK9HGDkh.js";import"./index-BTMSijfB.js";import"./index-Bu6kQjLM.js";import"./types-BCrxJhqI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZsMGLS6.js";import"./throttle-DVixtPip.js";import"./RechartsWrapper-2JrQYSBT.js";import"./index-HidsIZF1.js";import"./index-DtdyiYMy.js";import"./axisSelectors-DutwzDNX.js";import"./d3-scale-BD_lAQxm.js";import"./CartesianChart-BqBORtky.js";import"./chartDataContext-un8h0oN7.js";import"./CategoricalChart-BETRAeyd.js";import"./Symbols-D6XRg3mk.js";import"./symbol-sqDWSZm8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DofYk2ft.js";import"./uniqBy-DXRe4Vi9.js";import"./iteratee-C-XK7dPA.js";import"./tooltipContext-DqymTWbB.js";import"./AnimatedItems-CtF1ph7i.js";import"./useAnimationId-Qtosu25G.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BK1YtbdL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6Ox5ImN.js";import"./RegisterGraphicalItemId-Co8JXb8t.js";import"./ErrorBarContext-DiexwYLt.js";import"./GraphicalItemClipPath-hMgxAXNq.js";import"./SetGraphicalItem-BLsqb4fN.js";import"./getZIndexFromUnknown-9hn4chXx.js";import"./graphicalItemSelectors-DbH8wEHn.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
