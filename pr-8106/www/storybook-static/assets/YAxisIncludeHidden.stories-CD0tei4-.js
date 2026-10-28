import{r as f,R as e}from"./iframe-C82DQHN8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CY_V7IWg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-KEmmKuiN.js";import{C as k}from"./ComposedChart-CYmsodFg.js";import{X as K}from"./XAxis-HS7HwOQV.js";import{L as v}from"./Legend-CBS3sR82.js";import{B as a}from"./Bar-rNi6zTJO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Ckx9XYdx.js";import"./Text-BsKwg4yV.js";import"./resolveDefaultProps-VPX7RWl5.js";import"./pageBackground-fR40L72L.js";import"./ZIndexLayer-BbgqXMZY.js";import"./index-DS_o04pJ.js";import"./index-CrBCcUcr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CI9V5B2f.js";import"./throttle-DrIjUdEi.js";import"./axisSelectors-BBwIpa2g.js";import"./d3-scale-YRVCFiEs.js";import"./CartesianAxis-DKLzLHvo.js";import"./Layer-C-QkALxJ.js";import"./types-zIpyflln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dyzu-B2T.js";import"./index-Dxrl0h9V.js";import"./index-BzW5Id2r.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C7FIcLUG.js";import"./index-Q0hLYzZW.js";import"./CartesianChart-DkUBM6DF.js";import"./ZIndexPortal-CwXxcVKW.js";import"./CategoricalChart-CSFGEuTa.js";import"./Symbols-CFD8lW7l.js";import"./symbol-BmeELTCq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVdUc2iG.js";import"./uniqBy-DXinuiHK.js";import"./iteratee-0NsStHsr.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CqrMkTfo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CZ-MIfgH.js";import"./useAnimationId-B8gyVu2h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQaA7sJq.js";import"./tooltipContext-dQymymsN.js";import"./dataEntryStyles-Dn-nirF7.js";import"./ErrorBarContext-D11z8twA.js";import"./activeStyles-BTVFwqk3.js";import"./SetGraphicalItem-Bgxm3FOo.js";import"./getZIndexFromUnknown-D_YaWp6i.js";import"./useEffectiveDataKey-bWUuu12H.js";import"./omit-WsnK5_td.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
