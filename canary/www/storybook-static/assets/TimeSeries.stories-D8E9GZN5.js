import{R as e}from"./iframe-DgKiVndY.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BLbqPkVx.js";import{R as h}from"./zIndexSlice-dNuJcHRn.js";import{C as g}from"./ComposedChart-ZptqdVYs.js";import{L as x}from"./Line-BTleYBWw.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DcAUA4PB.js";import{T as V}from"./Tooltip-B0uI2fv_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-O82DChWw.js";import"./Layer-CitR-d8V.js";import"./resolveDefaultProps-D4xdWGM2.js";import"./Text-CbY3j4Ck.js";import"./DOMUtils-DDi-aYdE.js";import"./isWellBehavedNumber-D3WetmgY.js";import"./useId-DRmEtgtu.js";import"./useBackwardsCompatibleTheme-CVo9PiuG.js";import"./Label-Dw6GSad7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CiPL_m_c.js";import"./index-ClqqO2lb.js";import"./index-DJwO8k8A.js";import"./types-BGF6RwMG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RB0exVxa.js";import"./throttle-C4KEmVOQ.js";import"./index-DtVHhaCV.js";import"./index-DmBw5bKk.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CVLdrR-G.js";import"./axisSelectors-IaZq8uO9.js";import"./index-CkxJWCtX.js";import"./CartesianChart-BjKzNNSZ.js";import"./chartDataContext-Dv6GfWKh.js";import"./CategoricalChart-tj-0AtFI.js";import"./Curve-Pc89hUhq.js";import"./step-1uXQ1327.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-t-O5cYrN.js";import"./useAnimationId-Df1EENv3.js";import"./ActivePoints-CK7oXB-L.js";import"./Dot-0PmoZJ73.js";import"./RegisterGraphicalItemId-D1zFL55b.js";import"./ErrorBarContext-D4mtJzrM.js";import"./GraphicalItemClipPath-CbvSbhMn.js";import"./SetGraphicalItem-BLJqw_fJ.js";import"./getRadiusAndStrokeWidthFromDot-CJC1hcgF.js";import"./ActiveShapeUtils-A4Sw_vLw.js";import"./useGraphicalItemIdentity-Mjj8dgtd.js";import"./useElementOffset-D6g0REY2.js";import"./uniqBy-hF-kPyhu.js";import"./iteratee-CxgRG3tb.js";import"./Cross-C_QZfsze.js";import"./Rectangle-C7PgJRAr.js";import"./util-Dxo8gN5i.js";import"./Sector-DMov75Se.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
