import{r as f,R as e}from"./iframe-qOFEdJsq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-W_URYSZS.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-4ZilFo_n.js";import{C as k}from"./ComposedChart-CIu6IO4X.js";import{X as K}from"./XAxis-BLPVblQP.js";import{L as v}from"./Legend-D_RLPDIv.js";import{B as a}from"./Bar-v3P4qb_D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cllq2PGv.js";import"./Text-D4Or0m3K.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./DOMUtils-DGwlz8Fh.js";import"./pageBackground-BIUVtVt0.js";import"./ZIndexLayer-18sgIJKw.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./throttle-Bx7bNNV1.js";import"./axisSelectors-CB4lGYL3.js";import"./d3-scale-DLjhRaU2.js";import"./CartesianAxis-B9ZixuFu.js";import"./Layer-p7tl0Obh.js";import"./types-vee7x0Qx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BNMPtHnU.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";import"./Symbols-DU4y3lGd.js";import"./fillDefinitions-C8MPZPAo.js";import"./symbol-Cc7ZDpSQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DVIKzI6S.js";import"./uniqBy-Bo2q91U8.js";import"./iteratee-bC8XKX9j.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CNqM2k92.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIPq25kq.js";import"./useAnimationId-DRvHP31x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJhecgQK.js";import"./tooltipContext-BP9EM6Hs.js";import"./dataEntryStyles-BpwMOC9F.js";import"./ErrorBarContext-CScUCP7Y.js";import"./activeStyles-B7bZlFHp.js";import"./SetGraphicalItem-BZaIjsVo.js";import"./getZIndexFromUnknown-CRHni7CM.js";import"./useEffectiveDataKey-Y8Iowmfi.js";import"./omit-BS3hI4dD.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
