import{r as f,R as e}from"./iframe-CZhceScU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DyokKs4q.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-6KQyntdT.js";import{C as k}from"./ComposedChart-o3A5Ws01.js";import{X as K}from"./XAxis-o7n6bJ8R.js";import{L as v}from"./Legend-DUi_ZNry.js";import{B as s}from"./Bar-CaIXb91t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CNgEIlwK.js";import"./Text-CmIo03No.js";import"./resolveDefaultProps-DKz_FWjC.js";import"./DOMUtils-DbT53TZn.js";import"./isWellBehavedNumber-D-87yJTE.js";import"./useId-BZ6DWjsO.js";import"./useBackwardsCompatibleTheme-DNlLIhqX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wFB7jUG1.js";import"./index-CDuDfojR.js";import"./index-DpQK2wXv.js";import"./RechartsWrapper-FSanOK4G.js";import"./index-BEy16_lK.js";import"./index-Blwm4_kv.js";import"./throttle-4vdN6P2D.js";import"./axisSelectors-8JBi47Qo.js";import"./d3-scale-C7Vm1zun.js";import"./renderedTicksSlice-Cf3Ebwgh.js";import"./CartesianAxis-C3rrpirv.js";import"./Layer-Drn4JAex.js";import"./types-B4F0kvck.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-8qShj_eX.js";import"./chartDataContext-DJFrW4dv.js";import"./CategoricalChart-Cgj8wKUd.js";import"./Symbols-XuuhZcr7.js";import"./symbol-BufjkdaW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CAePsNzR.js";import"./uniqBy-DimUAY1k.js";import"./iteratee-D_nrFtIa.js";import"./AnimatedItems-DXBAxv9p.js";import"./useAnimationId-Cx8RIuDl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNqYqtsk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dk1tODGi.js";import"./tooltipContext-Dy-FNS8h.js";import"./RegisterGraphicalItemId-DnHmtku0.js";import"./ErrorBarContext-CS2ZLStC.js";import"./GraphicalItemClipPath-BzJCuoya.js";import"./SetGraphicalItem-DuTz6hix.js";import"./getZIndexFromUnknown-CLotRaH1.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DOfJK511.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
