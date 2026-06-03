import{r as f,R as e}from"./iframe-CsUTfbme.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DU0GmGih.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DJN3Z2tA.js";import{C as k}from"./ComposedChart-CLOI7yF1.js";import{X as K}from"./XAxis-B66nDtTW.js";import{L as v}from"./Legend-Br8yEIsg.js";import{B as s}from"./Bar-B3hUCiu-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CGtvq50a.js";import"./CartesianAxis-D0Iddbyw.js";import"./Layer-C0UzjkXP.js";import"./resolveDefaultProps-DOSPF-U5.js";import"./Text-1xaaQRGr.js";import"./DOMUtils-CCNMXYAS.js";import"./isWellBehavedNumber-CaHmgZiw.js";import"./Label-BrqLuQxp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BszTzZbW.js";import"./index-CpMCAhl1.js";import"./index-C0tTD0a-.js";import"./types-CNmnDBmM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DKAjtNca.js";import"./immer-BS6zuvPx.js";import"./RechartsWrapper-Bz5AtJCZ.js";import"./index-84tIClUK.js";import"./index-CiR04iLY.js";import"./axisSelectors-BaY3t_zv.js";import"./d3-scale-D08hqUcH.js";import"./CartesianChart-xV6uxcxT.js";import"./chartDataContext-Dks_l25O.js";import"./CategoricalChart-CDn_aEvK.js";import"./Symbols-DdktixUl.js";import"./symbol-DRRDZ1JJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfTrE2Dz.js";import"./uniqBy-cNbdeQjK.js";import"./iteratee-CEEi4l6n.js";import"./tooltipContext-wiAPXXIa.js";import"./ReactUtils-CIWjNZdp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DR8qZyZF.js";import"./useAnimationId-DbHaBqmd.js";import"./ActiveShapeUtils-eKrzz-9L.js";import"./RegisterGraphicalItemId-Bdk-Jfc1.js";import"./ErrorBarContext-BqDYRxxf.js";import"./GraphicalItemClipPath-ciWvPzTM.js";import"./SetGraphicalItem-X5S3Yot0.js";import"./getZIndexFromUnknown-BTzAmo9f.js";import"./graphicalItemSelectors-B5605qJb.js";const ve={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
