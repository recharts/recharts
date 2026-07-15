import{r as f,R as e}from"./iframe-BcyvxDDm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DWNExzo5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CjqwPb4I.js";import{C as k}from"./ComposedChart-C6Y2kg6Z.js";import{X as K}from"./XAxis-hKqegIsy.js";import{L as v}from"./Legend-4H4K0yTj.js";import{B as s}from"./Bar-CSue2tQL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-X-wBC9Mi.js";import"./Layer-BbNzeSuC.js";import"./resolveDefaultProps-DYK2TugC.js";import"./Text-DHboH0PZ.js";import"./DOMUtils-BbuOOwxk.js";import"./isWellBehavedNumber-DT8eXGOZ.js";import"./Label-DKWc-r2Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-O4JEDRQM.js";import"./index-BbDVdbFr.js";import"./index-DylQUhO9.js";import"./types-BRN82dlo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C78J9WJd.js";import"./throttle-Da4mYIun.js";import"./RechartsWrapper-BKq7sB4k.js";import"./index-VYrkeph1.js";import"./index-CmO5XTPj.js";import"./axisSelectors-Ft8qoIRM.js";import"./d3-scale-CuOcyn8C.js";import"./CartesianChart-Dy4JzN_k.js";import"./chartDataContext-q6A5cODj.js";import"./CategoricalChart-CjQdcPEp.js";import"./Symbols-xmwrzh0l.js";import"./symbol-mg0Qyk3e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BgpGSJ6K.js";import"./uniqBy-Dl_hAjLn.js";import"./iteratee-Danss_sE.js";import"./tooltipContext-gCCyTBXM.js";import"./AnimatedItems-C_84PZuB.js";import"./useAnimationId-UCivMRaV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Df6t51Wj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CAO4oJEH.js";import"./RegisterGraphicalItemId-MfcacHn_.js";import"./ErrorBarContext-Bo7tXsWd.js";import"./GraphicalItemClipPath-gcf9l3Dr.js";import"./SetGraphicalItem-NfXYYfkR.js";import"./getZIndexFromUnknown-F_HTt5lD.js";import"./graphicalItemSelectors-BBvA2a8_.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
