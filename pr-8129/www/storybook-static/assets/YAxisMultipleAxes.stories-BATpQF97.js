import{R as t}from"./iframe-qOFEdJsq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-W_URYSZS.js";import{R as l}from"./zIndexSlice-4ZilFo_n.js";import{C as x}from"./ComposedChart-CIu6IO4X.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-v3P4qb_D.js";import{L as a}from"./Line-DRa6L9kk.js";import{X as c}from"./XAxis-BLPVblQP.js";import{T as g}from"./Tooltip-DXk_gFAc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cllq2PGv.js";import"./Text-D4Or0m3K.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./DOMUtils-DGwlz8Fh.js";import"./pageBackground-BIUVtVt0.js";import"./ZIndexLayer-18sgIJKw.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./throttle-Bx7bNNV1.js";import"./axisSelectors-CB4lGYL3.js";import"./d3-scale-DLjhRaU2.js";import"./CartesianAxis-B9ZixuFu.js";import"./Layer-p7tl0Obh.js";import"./types-vee7x0Qx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BNMPtHnU.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";import"./LabelList-CNqM2k92.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIPq25kq.js";import"./fillDefinitions-C8MPZPAo.js";import"./useAnimationId-DRvHP31x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJhecgQK.js";import"./tooltipContext-BP9EM6Hs.js";import"./dataEntryStyles-BpwMOC9F.js";import"./ErrorBarContext-CScUCP7Y.js";import"./activeStyles-B7bZlFHp.js";import"./SetGraphicalItem-BZaIjsVo.js";import"./getZIndexFromUnknown-CRHni7CM.js";import"./useEffectiveDataKey-Y8Iowmfi.js";import"./omit-BS3hI4dD.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DB3f0x8T.js";import"./step-5jiFn3Gv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B9VIFtI9.js";import"./Dot-Cx_dxYvu.js";import"./Symbols-DU4y3lGd.js";import"./symbol-Cc7ZDpSQ.js";import"./getRadiusAndStrokeWidthFromDot-B-7643QY.js";import"./useElementOffset-DVIKzI6S.js";import"./uniqBy-Bo2q91U8.js";import"./iteratee-bC8XKX9j.js";import"./Cross-B7ynVVFH.js";import"./Sector-CAtsCAlR.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
