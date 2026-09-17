import{r as f,R as e}from"./iframe-BH_ynjC4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-zkDdPwB0.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BI1ysfjy.js";import{C as k}from"./ComposedChart-CZ5mgmPm.js";import{X as K}from"./XAxis-DHYBvz-p.js";import{L as v}from"./Legend-BW-wqWT_.js";import{B as a}from"./Bar-DyycvxsZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-FZu_WDSG.js";import"./Text-DIx256cP.js";import"./resolveDefaultProps-BlxwprZn.js";import"./DOMUtils-Cq_tvs96.js";import"./isWellBehavedNumber-BHoIJZLy.js";import"./useId-POUb9F1l.js";import"./useBackwardsCompatibleTheme-BDKfSYgg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DJFUyPkd.js";import"./index-RF2vHOS8.js";import"./index-DbazBVJ8.js";import"./RechartsWrapper-BODbUaHb.js";import"./axisSelectors-BuZGyw5u.js";import"./throttle-B92nZ18Y.js";import"./d3-scale-3O5mTbCq.js";import"./index-C7z_bQHY.js";import"./index-B2CUqXvo.js";import"./renderedTicksSlice-AZvUrajM.js";import"./index-483Wu6hp.js";import"./CartesianAxis-L0O2lUH5.js";import"./Layer-BZJOgrQn.js";import"./types-BCqSdCtd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-x2wpl3h2.js";import"./chartDataContext-D5KYfl9L.js";import"./CategoricalChart-CQ3zK25U.js";import"./Symbols-Bzngru5w.js";import"./symbol-Bwxw-Erc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bxs2wRxM.js";import"./uniqBy-CpZpE7BS.js";import"./iteratee-De5tWLyW.js";import"./AnimatedItems-BzetGmJU.js";import"./useAnimationId-dKpzhWqB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcuPIW-h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-vPOXs-PX.js";import"./tooltipContext-CzkBNMsY.js";import"./RegisterGraphicalItemId-BaYVXJgS.js";import"./ErrorBarContext-C6wSEKqb.js";import"./GraphicalItemClipPath-CJUrTS9M.js";import"./SetGraphicalItem-CVCJo--0.js";import"./getZIndexFromUnknown-C0VMxTb-.js";import"./useGraphicalItemIdentity-CmFW8bhj.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
