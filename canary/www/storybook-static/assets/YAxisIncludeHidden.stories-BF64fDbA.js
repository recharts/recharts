import{r as f,R as e}from"./iframe-QVKxPJQm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-D2swP-TV.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-G0DC-c-K.js";import{C as k}from"./ComposedChart-D6hBWYm7.js";import{X as K}from"./XAxis-C2HS1FtJ.js";import{L as v}from"./Legend-sLgq0bx5.js";import{B as s}from"./Bar-D2KgqMyW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DLMFwiXu.js";import"./CartesianAxis-DF6IixyN.js";import"./Layer-Bc0oacyD.js";import"./resolveDefaultProps-CEVaC25K.js";import"./Text-BQy0Q-oS.js";import"./DOMUtils-D8ZqFxMD.js";import"./isWellBehavedNumber-JryOpPT2.js";import"./Label-IjZcZSlh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNHQW8Kz.js";import"./index-C30tpYub.js";import"./index-BlfChkir.js";import"./types-DQssRkrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BovhzHMl.js";import"./immer-edRA0-Yp.js";import"./RechartsWrapper-C-HdUf1N.js";import"./index-CIkXYV9A.js";import"./index-D4ODfY0z.js";import"./axisSelectors-C3vt1wN5.js";import"./d3-scale-CGteqX7a.js";import"./CartesianChart-KcupAlfP.js";import"./chartDataContext-zcaQUTsU.js";import"./CategoricalChart-CeUMrFdM.js";import"./Symbols-Ba_SzYwE.js";import"./symbol-DrviD42Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWwojRwA.js";import"./uniqBy-f_3dXFuE.js";import"./iteratee-BmhOMioJ.js";import"./tooltipContext-BMDq1ZNk.js";import"./AnimatedItems--IUYJkxx.js";import"./useAnimationId-BUf_qCat.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBAzwt0m.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dv5zSjSn.js";import"./RegisterGraphicalItemId-DJWNxqfN.js";import"./ErrorBarContext-CGBznjIg.js";import"./GraphicalItemClipPath-cpuBGhtV.js";import"./SetGraphicalItem-mX53cDIp.js";import"./getZIndexFromUnknown-D3n2ofgM.js";import"./graphicalItemSelectors-CvQeNwQF.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
