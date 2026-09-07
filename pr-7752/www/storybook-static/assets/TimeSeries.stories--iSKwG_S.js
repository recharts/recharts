import{R as e}from"./iframe-DJz24IKn.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BvHkm7Qz.js";import{R as h}from"./zIndexSlice-CaAOW0et.js";import{C as g}from"./ComposedChart-xCfhu6hO.js";import{L as x}from"./Line-BvJdofYx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DpRdoN7U.js";import{T as V}from"./Tooltip-tVuyKN2d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Dg3lbTZ2.js";import"./Layer-CBv-uhLi.js";import"./resolveDefaultProps-Y06lZ3Q4.js";import"./Text-DOF1K2eH.js";import"./DOMUtils-bn8Tja0g.js";import"./isWellBehavedNumber-fz8KERtX.js";import"./useId-B5fw3oZO.js";import"./useBackwardsCompatibleTheme-LsfOWVY-.js";import"./Label-VNkqCN5V.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Clw8d4Oc.js";import"./index-BNwKLvBG.js";import"./index-DbXeBKDO.js";import"./types-DwqEhWGa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dg7Ny4_Y.js";import"./throttle-BsbtN1cS.js";import"./index-C__guRbQ.js";import"./index-C6YBLKF8.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DWus6mTf.js";import"./axisSelectors-Dn-i2Eyh.js";import"./index-DMHuassP.js";import"./CartesianChart-CnQAJVhL.js";import"./chartDataContext-Dgbqaxm0.js";import"./CategoricalChart-uGwJvut9.js";import"./Curve-3bxMRdbj.js";import"./step-BwCbZBCr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CKV2EJWT.js";import"./useAnimationId-CK0cbgiG.js";import"./ActivePoints-CWxCsPop.js";import"./Dot-C5Lvhk5n.js";import"./RegisterGraphicalItemId-2YIIw7m6.js";import"./ErrorBarContext-BLLu5XO3.js";import"./GraphicalItemClipPath-CvjsKkOB.js";import"./SetGraphicalItem-npZ_hDhu.js";import"./getRadiusAndStrokeWidthFromDot-CFlofvCE.js";import"./ActiveShapeUtils-BKaKBNza.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CceHZgWF.js";import"./uniqBy-BmN8ddO_.js";import"./iteratee-BEbzn8gE.js";import"./Cross-Ci-r9kiZ.js";import"./Rectangle-BGv_Gg_1.js";import"./util-Dxo8gN5i.js";import"./Sector-Cq-APeHy.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
