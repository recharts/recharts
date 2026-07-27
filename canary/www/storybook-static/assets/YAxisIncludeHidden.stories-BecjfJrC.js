import{r as f,R as e}from"./iframe-C-jRtd4O.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BsnlIXwv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C13rA1yY.js";import{C as k}from"./ComposedChart-CYkr-z0J.js";import{X as K}from"./XAxis-BUOjYmWG.js";import{L as v}from"./Legend-BwpHDNTz.js";import{B as s}from"./Bar-BvcGoYue.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Dovpw9_t.js";import"./Layer-0nVmjaPa.js";import"./resolveDefaultProps-hGxk2_Y7.js";import"./Text-Bq6-_dbg.js";import"./DOMUtils-BNQTHuwM.js";import"./isWellBehavedNumber-BazoxJ8k.js";import"./Label-ESmdcWMr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPTUfBlU.js";import"./index-JIvcUmdP.js";import"./index-yCZUjS0Z.js";import"./types-DJYeJibv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice--jA8UMed.js";import"./throttle-t4hhNfzx.js";import"./RechartsThemeContext-D59rVGZ_.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CszU7DXa.js";import"./index-Cqo_qzOk.js";import"./index-CODjAUjN.js";import"./axisSelectors-CkStVnzz.js";import"./d3-scale-DJzOiobO.js";import"./CartesianChart-dpIhYASN.js";import"./chartDataContext-POKzhFjx.js";import"./CategoricalChart-DlYy8Ici.js";import"./Symbols-DyJcHjUB.js";import"./symbol-DV86W81H.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ByJvEw10.js";import"./uniqBy-Cg8LBFHE.js";import"./iteratee-K_oW_REd.js";import"./tooltipContext-CXFMaxGq.js";import"./AnimatedItems-Dni8LwDO.js";import"./useAnimationId-CyWcqLuD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DsgzCHOI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DtJs66Wu.js";import"./RegisterGraphicalItemId-fpfKicem.js";import"./ErrorBarContext-B9gJUi0L.js";import"./GraphicalItemClipPath-BbJiOV57.js";import"./SetGraphicalItem-DdFJ0gfA.js";import"./getZIndexFromUnknown-D58bCpIj.js";import"./graphicalItemSelectors-DurAtTWi.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
