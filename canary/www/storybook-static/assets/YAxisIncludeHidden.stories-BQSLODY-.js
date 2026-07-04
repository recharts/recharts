import{r as f,R as e}from"./iframe-DD3MNlJs.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BU-eH5Uj.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DsPtdaG-.js";import{C as k}from"./ComposedChart-Ch5rhd-f.js";import{X as K}from"./XAxis-C5LFfJlv.js";import{L as v}from"./Legend-BtWm6rh3.js";import{B as s}from"./Bar-_ZQ5tKns.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BeN5FwRC.js";import"./Layer-BSwpDfMb.js";import"./resolveDefaultProps-Bl223uSE.js";import"./Text-BWwrC4eC.js";import"./DOMUtils-CKULAiMw.js";import"./isWellBehavedNumber-CNMhuHyW.js";import"./Label-CTgAmEuq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIp4crEt.js";import"./index-Bck27UYR.js";import"./index-a_wokTdP.js";import"./types-3SXpu3DM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfcmamU7.js";import"./throttle-BsgVdVzc.js";import"./RechartsWrapper-CCnqh_-x.js";import"./index-DseUKmqi.js";import"./index-D7phJECN.js";import"./axisSelectors-BHK7QjqO.js";import"./d3-scale-yWlQ4_Nx.js";import"./CartesianChart-aRdig7-B.js";import"./chartDataContext-B7qXvLbV.js";import"./CategoricalChart-Cq7n2KtT.js";import"./Symbols-DO_i8AaJ.js";import"./symbol-BwzlA26m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJdMJ0L5.js";import"./uniqBy-DHEUFyg1.js";import"./iteratee-D4ErcGbL.js";import"./tooltipContext-zpYBwVet.js";import"./AnimatedItems--KiCkiyG.js";import"./useAnimationId-3wwsxOl9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BemF6WzX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNZIetEU.js";import"./RegisterGraphicalItemId-UFa7fX9c.js";import"./ErrorBarContext-C82oMdbu.js";import"./GraphicalItemClipPath-NC5NbT5H.js";import"./SetGraphicalItem-BanwGypR.js";import"./getZIndexFromUnknown-BZU7gNL9.js";import"./graphicalItemSelectors-wIYvHEz-.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
