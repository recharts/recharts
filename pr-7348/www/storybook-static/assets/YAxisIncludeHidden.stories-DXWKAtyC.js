import{u as f,e}from"./iframe-BExdC6gN.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CJCe92Ep.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-DOMqUAof.js";import{C}from"./ComposedChart-CfHGhx4q.js";import{X as K}from"./XAxis-CiJpP_bt.js";import{L as v}from"./Legend-B2lxEszQ.js";import{B as s}from"./Bar-2vKPTGfq.js";import{R as x}from"./RechartsHookInspector-jedlPGVn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DOEtdq2b.js";import"./Layer-Bn8zfoRz.js";import"./resolveDefaultProps-BABy-fAx.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./Label-BEYaNe1v.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./zIndexSlice-DqK4zht4.js";import"./immer-fLQu0D5z.js";import"./types-DfAw3uAA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./index-dnhQRVhY.js";import"./CartesianChart-DEFw3dUf.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./Symbols-P9zroqHz.js";import"./symbol-DqwVPS5C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B0Mp0O5s.js";import"./uniqBy-RnJXqtWx.js";import"./iteratee-BYEtbo7d.js";import"./tooltipContext-Bht36Dkp.js";import"./ReactUtils-Dgl8JF7u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUkG5lzX.js";import"./useAnimationId-DlRyv4oq.js";import"./ActiveShapeUtils-BBh91YEI.js";import"./isPlainObject-Eh4Z7yDc.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-CGA7gaf-.js";import"./ErrorBarContext-B68PiQ82.js";import"./GraphicalItemClipPath-B5kn33G8.js";import"./SetGraphicalItem-DVUCQsv1.js";import"./getZIndexFromUnknown-Ct-rTpnU.js";import"./graphicalItemSelectors-BxkHt0qJ.js";import"./index-Bb8SVNOL.js";import"./ChartSizeDimensions-DVous5ni.js";import"./OffsetShower-DTmFDKEr.js";import"./PlotAreaShower-D_ibhKaV.js";const Le={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ie=["WithIncludeHidden"];export{t as WithIncludeHidden,Ie as __namedExportsOrder,Le as default};
