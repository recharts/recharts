import{r as f,R as e}from"./iframe-D9rYPFI6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-9YjsfZpB.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C3wsTrp9.js";import{C as k}from"./ComposedChart-CrPVcAMK.js";import{X as K}from"./XAxis-QgJPS01w.js";import{L as v}from"./Legend-fN0LFk7B.js";import{B as s}from"./Bar-DLmVZAc_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-VP1_-jlA.js";import"./Text-CPEEagO_.js";import"./resolveDefaultProps-ULtnpSod.js";import"./DOMUtils-DnqcKz1X.js";import"./isWellBehavedNumber-wns85k-s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CJhkiIkj.js";import"./index-CBOJEfGe.js";import"./index-D-oLxkfn.js";import"./RechartsWrapper-DraVZS0h.js";import"./index-BwM3wMsV.js";import"./index-BxIft0ja.js";import"./throttle-JMn6s7-r.js";import"./axisSelectors-BEMJ5G3d.js";import"./d3-scale-CWZ2NBQb.js";import"./renderedTicksSlice-BQcf9eI6.js";import"./CartesianAxis-vGmXII6H.js";import"./Layer-Dvgn5PDs.js";import"./types-BrxWVo-u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CrN5KJo6.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CbCZKRVf.js";import"./chartDataContext-C9SNw5Kb.js";import"./CategoricalChart-BTp1W0gj.js";import"./Symbols-DLmN9lpr.js";import"./symbol-DdMz1eK0.js";import"./path-DyVhHtw_.js";import"./useElementOffset--j3qp99z.js";import"./uniqBy-Bk1kDvWW.js";import"./iteratee-D78jpAQO.js";import"./tooltipContext-BzUY6gWC.js";import"./AnimatedItems-JH_MyxHu.js";import"./useAnimationId-CBJcnsSW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CD4a3Cj_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yvf6fJP9.js";import"./RegisterGraphicalItemId-Can_TNgi.js";import"./ErrorBarContext-v151GJ1I.js";import"./GraphicalItemClipPath-CiKUQeNX.js";import"./SetGraphicalItem-AXc71c8D.js";import"./getZIndexFromUnknown-QZiyIskH.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IhPtoSXH.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
