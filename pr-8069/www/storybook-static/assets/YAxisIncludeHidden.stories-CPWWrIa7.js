import{r as f,R as e}from"./iframe-DmOC-Kec.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CcRfM4MH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dnmn7sAe.js";import{C as k}from"./ComposedChart-BkZrMH3I.js";import{X as K}from"./XAxis-ByYBkyBH.js";import{L as v}from"./Legend-BuMlXU6a.js";import{B as a}from"./Bar-DyzrN9xT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dya5Ed-c.js";import"./Text-CTMopfR1.js";import"./resolveDefaultProps-4b8FSqHP.js";import"./pageBackground--_ixwiIK.js";import"./isWellBehavedNumber-CieT4pBa.js";import"./useId-BuaxFojz.js";import"./useBackwardsCompatibleTheme-BIerM7O_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CPUam-Va.js";import"./index-B8dvCc79.js";import"./index-B0Er-kke.js";import"./dataEntryStyles-CeCSWdpc.js";import"./axisSelectors-BhU9IBL9.js";import"./throttle-26j8lv8v.js";import"./d3-scale-BzcnxCkj.js";import"./CartesianAxis-D2u0I9ER.js";import"./Layer-DqeA_nA2.js";import"./types-Bi5NSMkf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BbRk6kVT.js";import"./index-DauADrzh.js";import"./index-FaI1Rch4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BAE5OfjG.js";import"./index-D-7FIJbH.js";import"./CartesianChart-AsMQKsVq.js";import"./chartDataContext-CyP3b76p.js";import"./CategoricalChart-D6inGbGf.js";import"./Symbols-DkIZTGNL.js";import"./symbol-G7578D_G.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZDsHkVD5.js";import"./uniqBy-BV3xScZI.js";import"./iteratee-M-5VHa93.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CHqa9trn.js";import"./useAnimationId-BrR1kfhy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2agr858.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tFB41mpm.js";import"./tooltipContext-D0_zMEp9.js";import"./RegisterGraphicalItemId-CjMER2_v.js";import"./ErrorBarContext-CznJE672.js";import"./GraphicalItemClipPath-a-_vkjmo.js";import"./SetGraphicalItem-DTnHHD7N.js";import"./getZIndexFromUnknown-xym2cCmo.js";import"./useEffectiveDataKey-DpBICXZ6.js";import"./omit-CitTF1jq.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
