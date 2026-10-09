import{r as f,R as e}from"./iframe-C7tNsTpK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-aXsdWW2g.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-T7oa9RdZ.js";import{C as k}from"./ComposedChart-CgHuYAC3.js";import{X as K}from"./XAxis-C2gvQZpV.js";import{L as v}from"./Legend-D7Umu2tl.js";import{B as a}from"./Bar-Coi7-76v.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CEwaTgR3.js";import"./Text-UOL45mL4.js";import"./resolveDefaultProps-DbdXlzmI.js";import"./pageBackground-B-TVGQhf.js";import"./isWellBehavedNumber-w95Ql-ta.js";import"./useId-6XeKOM79.js";import"./useBackwardsCompatibleTheme-BtQBwdq6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jLHUg-ly.js";import"./index-BESlF8Z2.js";import"./index-swZv8iIV.js";import"./RechartsWrapper-BucpRp_7.js";import"./axisSelectors-CxImXzGX.js";import"./throttle-DNLiVZh5.js";import"./d3-scale-CAID8NmZ.js";import"./index-BolqH0tk.js";import"./index-CS0OILw8.js";import"./renderedTicksSlice-j7Pa5BYg.js";import"./index-DDzOQsUA.js";import"./CartesianAxis-BaDX4wf1.js";import"./Layer-DP-YoZN_.js";import"./types-OUsJcmF8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B_1K3lTu.js";import"./chartDataContext-B0xxoqnf.js";import"./CategoricalChart-Lk1sxOY3.js";import"./Symbols-B0hmSjF7.js";import"./symbol-NUkZhKvQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zMNgU5oi.js";import"./uniqBy-Bwz-78ds.js";import"./iteratee-CFobVmxc.js";import"./AnimatedItems-gSeOcFSg.js";import"./useAnimationId-Bb7S2zXD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B75oFVmx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5hficCmD.js";import"./tooltipContext-Czplw5CS.js";import"./RegisterGraphicalItemId-CplM38Xw.js";import"./ErrorBarContext-Z3h8hxY9.js";import"./GraphicalItemClipPath-nv6N7UDG.js";import"./SetGraphicalItem-CiL25rkH.js";import"./getZIndexFromUnknown-DbGzk3bP.js";import"./useGraphicalItemIdentity-wn6P8Qk2.js";import"./dataEntryStyles-nGReLrVP.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
