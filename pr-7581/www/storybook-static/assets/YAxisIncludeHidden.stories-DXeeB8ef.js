import{r as f,R as e}from"./iframe-Cug8bpW1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-uhDp_b-D.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-9cZpiRga.js";import{C as k}from"./ComposedChart-Bv2dV5dB.js";import{X as K}from"./XAxis-BfPgGv85.js";import{L as v}from"./Legend-DxugirGZ.js";import{B as s}from"./Bar-BzFkog2f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BVOPpVQH.js";import"./Layer-DAaIMucZ.js";import"./resolveDefaultProps-CWL5wq5C.js";import"./Text-Y2ry5wK9.js";import"./DOMUtils-DIK0_8l8.js";import"./isWellBehavedNumber-1QeuJ8xh.js";import"./Label-C_AgOq8t.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_am4wav.js";import"./index-BU-oTyxR.js";import"./index-A9iLt5fb.js";import"./types-BJnTryYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DuZDB9Ry.js";import"./throttle-B6lLkzEm.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DxwXXeuL.js";import"./index-GrHgVuHl.js";import"./index-C2En2hdi.js";import"./axisSelectors-BKPMDK9R.js";import"./d3-scale-Dh_zFLyg.js";import"./CartesianChart-DEYZwCE3.js";import"./chartDataContext-BQl3S7aI.js";import"./CategoricalChart-1sHQms95.js";import"./Symbols-DR1I-OOn.js";import"./symbol-Cr0_TzMS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ynp9RdRd.js";import"./uniqBy-DrzaFqXi.js";import"./iteratee-DEWmF1v2.js";import"./tooltipContext-BM8CW2sL.js";import"./AnimatedItems-C6_8UlhB.js";import"./useAnimationId-iyUsFQUM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BkYWDjed.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CL8eHJZj.js";import"./RegisterGraphicalItemId-D2I1FNOP.js";import"./ErrorBarContext-DaF_EPCk.js";import"./GraphicalItemClipPath-48VFK23w.js";import"./SetGraphicalItem-CCK_hlSi.js";import"./getZIndexFromUnknown-nfq-3w0w.js";import"./graphicalItemSelectors-CIrMj4zc.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
