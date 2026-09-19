import{R as e}from"./iframe-EacBJx3u.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cl6K2xWP.js";import{R as h}from"./zIndexSlice-BiNX82M2.js";import{C as g}from"./ComposedChart-DLV9kOGF.js";import{L as x}from"./Line-CgqeytmG.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-XN8I2g_L.js";import{T as V}from"./Tooltip-DhPX_N6D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DHoeZLWk.js";import"./Layer-BUsl6vHA.js";import"./resolveDefaultProps-Pp64jnNu.js";import"./Text-DusUwDRl.js";import"./DOMUtils-R4-PljPA.js";import"./isWellBehavedNumber-cllAzHLG.js";import"./useId-Cx3ryNMd.js";import"./useBackwardsCompatibleTheme-C878E-FF.js";import"./Label-DrX_jEaz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbjobkdE.js";import"./index-zONtSjtR.js";import"./index-Cp5XPxNK.js";import"./types-CDt3wtpt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bi45b659.js";import"./throttle-CQWyIvYS.js";import"./index-Cjnu8Ghr.js";import"./index-DAXn18Z3.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DvnaJvMy.js";import"./axisSelectors-BsKbaT3c.js";import"./index-BWFLwSJj.js";import"./CartesianChart-CpkU4zi_.js";import"./chartDataContext-6_AZEoRj.js";import"./CategoricalChart-DR3NAbyi.js";import"./Curve-DXkxZuR3.js";import"./step--LIF_hlk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CgPok0XL.js";import"./useAnimationId-BrvpB7V7.js";import"./ActivePoints-BKu6KFOZ.js";import"./Dot-Dlf7mAE0.js";import"./RegisterGraphicalItemId-C6xi7qpR.js";import"./ErrorBarContext-Di28pWGd.js";import"./GraphicalItemClipPath-DdpslyMR.js";import"./SetGraphicalItem-DIVfOwKJ.js";import"./getRadiusAndStrokeWidthFromDot-D1gfmqoH.js";import"./ActiveShapeUtils-D1Q_UPVj.js";import"./useGraphicalItemIdentity-PgG_6CLw.js";import"./useElementOffset-CW3PsA1I.js";import"./uniqBy-DulbN1k2.js";import"./iteratee-CZcssftL.js";import"./Cross-Bx1awyvz.js";import"./Rectangle-CcRh70Ua.js";import"./util-Dxo8gN5i.js";import"./Sector-CXNpvmKT.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
