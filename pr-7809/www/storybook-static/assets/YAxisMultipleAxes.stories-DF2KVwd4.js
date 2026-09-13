import{R as t}from"./iframe-Dv0y1gpD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bad4LtVV.js";import{R as l}from"./zIndexSlice-Dcg1qyEP.js";import{C as x}from"./ComposedChart-D5zGBnOn.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-uDN1xxSg.js";import{L as a}from"./Line-DsKTVdZ7.js";import{X as c}from"./XAxis-DC1yM-4Y.js";import{T as g}from"./Tooltip-cQbAJuRP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BjJ47aqL.js";import"./Text-yCn_2ASS.js";import"./resolveDefaultProps-BSnMxCtb.js";import"./DOMUtils-BDbpPHw_.js";import"./isWellBehavedNumber-CSH4eNbA.js";import"./useId-CIoPvc9K.js";import"./useBackwardsCompatibleTheme-D_XOd78A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKxKOknR.js";import"./index-CDdFi7FD.js";import"./index-CuUTphOp.js";import"./RechartsWrapper-DBZPU8BT.js";import"./axisSelectors-CWVN05a4.js";import"./throttle-DRnb1olJ.js";import"./d3-scale-C1I5bktH.js";import"./index-C_-lX3o6.js";import"./index-L6ZabEtj.js";import"./renderedTicksSlice-BROtRsGC.js";import"./index-D08948xk.js";import"./CartesianAxis-XZ9E7gxq.js";import"./Layer-BhVcBCwc.js";import"./types-DPFKMWXW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-By9n1b2a.js";import"./chartDataContext-BgIF_Hcs.js";import"./CategoricalChart-CsjQZa1B.js";import"./AnimatedItems-DuOoJz7j.js";import"./useAnimationId-CIZ8sAVQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CBwgxWI1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Du3md58W.js";import"./tooltipContext-CptT7C_U.js";import"./RegisterGraphicalItemId-Cct8Dhhi.js";import"./ErrorBarContext-W61HXda7.js";import"./GraphicalItemClipPath-C2A6ObbO.js";import"./SetGraphicalItem-bcdkfO_p.js";import"./getZIndexFromUnknown-B7vmGG7l.js";import"./useGraphicalItemIdentity-DxPaTWc4.js";import"./Curve-BcMDBBzU.js";import"./step-CmmDeSbO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ipJb0gdg.js";import"./Dot-jZhU2Vzn.js";import"./getRadiusAndStrokeWidthFromDot-Bl_0a7Wc.js";import"./useElementOffset-Ck17hGtu.js";import"./uniqBy-DBrVusL1.js";import"./iteratee-DAD7IavB.js";import"./Cross-DNPJlbtn.js";import"./Sector-yhDp5fID.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
