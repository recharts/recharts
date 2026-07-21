import{r as f,R as e}from"./iframe-Ba761dAt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BGJzMLCA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-QfUsSAvl.js";import{C as k}from"./ComposedChart-xz85xxXO.js";import{X as K}from"./XAxis-BFSA3F3Y.js";import{L as v}from"./Legend-CcGGT61q.js";import{B as s}from"./Bar-BgPPVS0F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Dp6wkVSq.js";import"./Layer-B5w5vx75.js";import"./resolveDefaultProps-BbsZGrBO.js";import"./Text-CN68nsih.js";import"./DOMUtils-BwEbS88Q.js";import"./isWellBehavedNumber-DtdZYAzd.js";import"./Label-BnOVxmge.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DN2jzfCT.js";import"./index-CD7Kt9vJ.js";import"./index-CQZXBhnc.js";import"./types-0dL2Niha.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C9WcFyVD.js";import"./throttle-DM8vz_S7.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Bka_uKoY.js";import"./index-DNu-VFbT.js";import"./index-jmRPS8ks.js";import"./axisSelectors-Cn6pQrFe.js";import"./d3-scale-MektT9AZ.js";import"./CartesianChart-BhhNM2dx.js";import"./chartDataContext-CIdWR6fk.js";import"./CategoricalChart-B2LsRV82.js";import"./Symbols-BRW25Rg2.js";import"./symbol-F9gJ0Uyf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zcMD2hVj.js";import"./uniqBy-CHlYBrF5.js";import"./iteratee-BskgW_tl.js";import"./tooltipContext-B9wJY5wt.js";import"./AnimatedItems-DBRlvqN4.js";import"./useAnimationId-Bb4M1zTw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bb2j6FkB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SxPaImaJ.js";import"./RegisterGraphicalItemId-BoJDveOV.js";import"./ErrorBarContext-kfdlWhVC.js";import"./GraphicalItemClipPath-CD6E6U12.js";import"./SetGraphicalItem-c2dU8YzM.js";import"./getZIndexFromUnknown-Bhvl5aqy.js";import"./graphicalItemSelectors-DdJlLUk9.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
