import{R as e}from"./iframe-Dv0y1gpD.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DC1yM-4Y.js";import{R as h}from"./zIndexSlice-Dcg1qyEP.js";import{C as g}from"./ComposedChart-D5zGBnOn.js";import{L as x}from"./Line-DsKTVdZ7.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C1I5bktH.js";import{T as V}from"./Tooltip-cQbAJuRP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-XZ9E7gxq.js";import"./Layer-BhVcBCwc.js";import"./resolveDefaultProps-BSnMxCtb.js";import"./Text-yCn_2ASS.js";import"./DOMUtils-BDbpPHw_.js";import"./isWellBehavedNumber-CSH4eNbA.js";import"./useId-CIoPvc9K.js";import"./useBackwardsCompatibleTheme-D_XOd78A.js";import"./Label-BjJ47aqL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKxKOknR.js";import"./index-CDdFi7FD.js";import"./index-CuUTphOp.js";import"./types-DPFKMWXW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BROtRsGC.js";import"./throttle-DRnb1olJ.js";import"./index-C_-lX3o6.js";import"./index-L6ZabEtj.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DBZPU8BT.js";import"./axisSelectors-CWVN05a4.js";import"./index-D08948xk.js";import"./CartesianChart-By9n1b2a.js";import"./chartDataContext-BgIF_Hcs.js";import"./CategoricalChart-CsjQZa1B.js";import"./Curve-BcMDBBzU.js";import"./step-CmmDeSbO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DuOoJz7j.js";import"./useAnimationId-CIZ8sAVQ.js";import"./ActivePoints-ipJb0gdg.js";import"./Dot-jZhU2Vzn.js";import"./RegisterGraphicalItemId-Cct8Dhhi.js";import"./ErrorBarContext-W61HXda7.js";import"./GraphicalItemClipPath-C2A6ObbO.js";import"./SetGraphicalItem-bcdkfO_p.js";import"./getRadiusAndStrokeWidthFromDot-Bl_0a7Wc.js";import"./ActiveShapeUtils-Du3md58W.js";import"./useGraphicalItemIdentity-DxPaTWc4.js";import"./useElementOffset-Ck17hGtu.js";import"./uniqBy-DBrVusL1.js";import"./iteratee-DAD7IavB.js";import"./Cross-DNPJlbtn.js";import"./Rectangle-CBwgxWI1.js";import"./util-Dxo8gN5i.js";import"./Sector-yhDp5fID.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
