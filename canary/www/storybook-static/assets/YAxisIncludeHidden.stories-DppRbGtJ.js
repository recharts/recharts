import{r as f,R as e}from"./iframe-DUGvLzaM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BJE0EUN2.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B4Mogj2z.js";import{C as k}from"./ComposedChart-cwP5-Ry_.js";import{X as K}from"./XAxis-D-RL7BSf.js";import{L as v}from"./Legend-CmBjeBzE.js";import{B as a}from"./Bar-B4QSME-j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C6rBfDHi.js";import"./Text-DzH8Q7Re.js";import"./resolveDefaultProps-B6fFLtp3.js";import"./pageBackground-9CWG-5EI.js";import"./isWellBehavedNumber-Dz-qkofC.js";import"./useId-Bo2C_hQY.js";import"./useBackwardsCompatibleTheme-Dm759DN1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ytkVOhJ8.js";import"./index-Bf1ebX0Z.js";import"./index-D4rZIo04.js";import"./RechartsWrapper-Ba1hxoNM.js";import"./axisSelectors-CGc2s0Fh.js";import"./throttle-iBva9Xri.js";import"./d3-scale-C86sab-h.js";import"./index-CmYddVJ2.js";import"./index-CwW47wP2.js";import"./renderedTicksSlice-CrtrmLXp.js";import"./index-C-yXSHy-.js";import"./CartesianAxis-FW2HtnAK.js";import"./Layer-C-Z-OoWn.js";import"./types-CAM6k8hf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CoHpfyp6.js";import"./chartDataContext-DrEWUsQF.js";import"./CategoricalChart-W5cmFX3l.js";import"./Symbols-C4LVhUVE.js";import"./symbol-stOdtstY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DIK-eXNy.js";import"./uniqBy-DCe0PNdF.js";import"./iteratee-eCwGGnHr.js";import"./activeStyles-DDiORVPn.js";import"./useAnimationId-FtVQIfuZ.js";import"./dataEntryStyles-DRqvsfnl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-UuI_l8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYHb3Hz-.js";import"./tooltipContext-CiW5l7a0.js";import"./ErrorBarContext-CAZ1Nd8e.js";import"./GraphicalItemClipPath-BsVVWJrM.js";import"./SetGraphicalItem-BkJcCs8V.js";import"./getZIndexFromUnknown-D3mzutan.js";import"./useGraphicalItemIdentity-CNWhuATd.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
