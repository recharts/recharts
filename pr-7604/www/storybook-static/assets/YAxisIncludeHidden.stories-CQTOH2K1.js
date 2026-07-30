import{r as f,R as e}from"./iframe-Bcp8O5w9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BfwBAog7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D89hrw0J.js";import{C as k}from"./ComposedChart-BTnoYdrr.js";import{X as K}from"./XAxis-BiaLRW8b.js";import{L as v}from"./Legend-Btq_M8Vo.js";import{B as s}from"./Bar-Dll10prG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-hDShUpMs.js";import"./Text-wdIqEHol.js";import"./resolveDefaultProps-DZIqX7HS.js";import"./DOMUtils-CK1FWe6a.js";import"./isWellBehavedNumber-Cv5vkYjV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGoKIl_r.js";import"./index-8PiiTqGz.js";import"./index-D5K7XRz9.js";import"./RechartsWrapper-B5FCNVgo.js";import"./index-BdFtKw5i.js";import"./index-CR585iKh.js";import"./throttle-DAyQB-br.js";import"./renderedTicksSlice-DrTN80Ah.js";import"./axisSelectors-CoK9S3rY.js";import"./d3-scale-CsP8i0FA.js";import"./CartesianAxis-BtWjjBG7.js";import"./Layer-be5X0p7R.js";import"./types-BoqxM4LK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BZ4wBUr5.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CD4QeXTd.js";import"./chartDataContext-DNuqophf.js";import"./CategoricalChart-YaAk4iek.js";import"./Symbols-8OsQeKqu.js";import"./symbol-BW_3rSZb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqpNhrrP.js";import"./uniqBy-DzHmY-V-.js";import"./iteratee-gle5_reD.js";import"./tooltipContext-Ds4RAbur.js";import"./AnimatedItems-Dei1yN9c.js";import"./useAnimationId-BscNfyQw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0LEdSIL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmZAHZJ_.js";import"./RegisterGraphicalItemId-BpEAlExL.js";import"./ErrorBarContext-9-QyAyWc.js";import"./GraphicalItemClipPath-KqXDj0-X.js";import"./SetGraphicalItem-3vj6veQk.js";import"./getZIndexFromUnknown-DVbnyY4H.js";import"./graphicalItemSelectors-BL--sKd9.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
